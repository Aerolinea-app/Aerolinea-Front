import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { FacturaService } from 'src/app/services/Factura/factura.service';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { AddEditFacturaComponent } from './add-edit-factura/add-edit-factura.component';
import { ConfirmacionComponent } from 'src/app/shared/confirmacion/confirmacion.component';

@Component({
  selector: 'app-adm-facturas',
  templateUrl: './adm-facturas.component.html',
  styleUrls: ['./adm-facturas.component.css']
})
export class AdmFacturasComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  ngOnInit(): void {
    this.getFacturaList()
  }
  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  displayedColumns: string[] = [
    'id',
    'idUsuario',
    'fecha',
    'estado',
    'acciones'
  ];

  constructor(
    private _dialog: MatDialog,
    private _facturaService: FacturaService,
    private _mensajeService: MensajesService,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openAddEditFacturaForm() {
    const dialogRef = this._dialog.open(AddEditFacturaComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFacturaList();
        }
      }
    });
  }

  getImageUrl(imagen: File): string {
    return URL.createObjectURL(imagen);
  }

  getFacturaList() {
    this._facturaService.getFacturaList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  }

  confirmarEliminacion(id: number, nombreCompleto: string) {
    const dialogRef = this._dialog.open(ConfirmacionComponent, {
      width: '350px',
      data: { mensaje: `¿Está seguro que desea eliminar esta factura?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._facturaService.deleteFactura(id).subscribe({
          next: (res) => {
            this._mensajeService.openSnackBar(`La factura ha sido eliminado`);
            this.getFacturaList();
          },
          error: console.log
        })
      }
    })
  }

  deleteFactura(id: number) {
    this.confirmarEliminacion(id, '')
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditFacturaComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getFacturaList();
        }
      }
    });
  }

}
