import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { VueloService } from 'src/app/services/Vuelo/vuelo.service';
import { AddEditVueloComponent } from './add-edit-vuelo/add-edit-vuelo.component';
import { ConfirmacionComponent } from 'src/app/shared/confirmacion/confirmacion.component';
import { Aeropuerto } from 'src/app/models/Aeropuerto';
import { AeropuertoService } from 'src/app/services/Aeropuerto/aeropuerto.service';

@Component({
  selector: 'app-adm-vuelos',
  templateUrl: './adm-vuelos.component.html',
  styleUrls: ['./adm-vuelos.component.css']
})
export class AdmVuelosComponent implements OnInit, AfterViewInit {

  dataSource: MatTableDataSource<any>;
  aeropuertos: Aeropuerto[]

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  
  ngOnInit(): void {
    this.getVueloList()
    this.obtenerAeropuertos()
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  obtenerAeropuertos(): void {
    this._aeropuertoService.getAeropuertoList().subscribe(aeropuertos => {
      console.log(aeropuertos);
      this.aeropuertos = aeropuertos;
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  displayedColumns: string[] = [
    'id',
    'idAeropuertoOrigen',
    'idAeropuertoDestino',
    'precio',
    'fechaHoraSalida',
    'fechaHoraLlegada',
    'precioAsientoPreferencial',
    'precioAsientoVip',
    'precioAsientoTurista',
    'estado',
    'acciones',
  ];

  constructor(
    private _dialog: MatDialog,
    private _vueloService: VueloService,
    private _mensajeService: MensajesService,
    private _aeropuertoService: AeropuertoService,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  getAeropuertoNombre(idAeropuerto: number) {
    if (!this.aeropuertos) {
      return '';
    }

    const aeropuerto = this.aeropuertos.find(r => r.id === idAeropuerto);
    return aeropuerto ? aeropuerto.nombre : '';
  }

  openAddEditVueloForm() {
    const dialogRef = this._dialog.open(AddEditVueloComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getVueloList();
        }
      }
    });
  }

  getVueloList() {
    this._vueloService.getVueloList().subscribe({
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
      data: { mensaje: `¿Está seguro que desea eliminar este vuelo?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._vueloService.deleteVuelo(id).subscribe({
          next: (res) => {
            this._mensajeService.openSnackBar(`El vuelo ha sido eliminado`);
            this.getVueloList();
          },
          error: console.log
        })
      }
    })
  }

  deleteVuelo(id: number) {
    this.confirmarEliminacion(id, '')
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditVueloComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getVueloList();
        }
      }
    });
  }

}
