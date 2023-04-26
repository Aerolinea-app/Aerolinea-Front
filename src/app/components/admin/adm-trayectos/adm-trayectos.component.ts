import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { AvionService } from 'src/app/services/Avion/avion.service';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { VueloService } from 'src/app/services/Vuelo/vuelo.service';
import { TrayectoService } from 'src/app/services/trayecto/trayecto.service';
import { AddEditTrayectoComponent } from './add-edit-trayecto/add-edit-trayecto.component';
import { ConfirmacionComponent } from 'src/app/shared/confirmacion/confirmacion.component';

@Component({
  selector: 'app-adm-trayectos',
  templateUrl: './adm-trayectos.component.html',
  styleUrls: ['./adm-trayectos.component.css']
})
export class AdmTrayectosComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<any>;
  vuelos: VueloService[]
  aviones: AvionService[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;


  constructor(
    private _dialog: MatDialog,
    private _trayectoService: TrayectoService,
    private _vueloService: VueloService,
    private _avionService: AvionService,
    private _mensajeService: MensajesService,
    private _liveAnnouncer: LiveAnnouncer
  ) {

  }

  displayedColumns: string[] = [
    'id',
    'idVuelo',
    'idAvion',
    'idAeropuertoDestino',
    'idAeropuertoOrigen',
    'horaSalida',
    'horaLlegada',
    'estado',
    'acciones',
  ];

  ngOnInit(): void {
    this.getTrayectoList()
  }
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }

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

  openAddEditTrayectoForm() {
    const dialogRef = this._dialog.open(AddEditTrayectoComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTrayectoList();
        }
      }
    });
  }

  getTrayectoList() {
    this._trayectoService.getTrayectoList().subscribe({
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
      data: { mensaje: `¿Está seguro que desea eliminar este trayecto?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._trayectoService.deleteTrayecto(id).subscribe({
          next: (res) => {
            this._mensajeService.openSnackBar(`El trayecto ha sido eliminado`);
            this.getTrayectoList();
          },
          error: console.log
        })
      }
    })
  }

  deleteTrayecto(id: number) {
    this.confirmarEliminacion(id, '')
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditTrayectoComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getTrayectoList();
        }
      }
    });
  }

}
