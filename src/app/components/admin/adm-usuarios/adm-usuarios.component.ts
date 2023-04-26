import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSort, Sort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { UsuariosService } from 'src/app/services/Usuarios/usuarios.service';
import { AddEditUsuarioComponent } from './add-edit-usuario/add-edit-usuario.component';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { ConfirmacionComponent } from 'src/app/shared/confirmacion/confirmacion.component';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { RolUsuario } from 'src/app/models/RolUsuario';
import { RolusuarioService } from 'src/app/services/RolUsuario/rolusuario.service';

@Component({
  selector: 'app-adm-usuarios',
  templateUrl: './adm-usuarios.component.html',
  styleUrls: ['./adm-usuarios.component.css']
})
export class AdmUsuariosComponent implements OnInit, AfterViewInit {

  roles: RolUsuario[]

  displayedColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'correo',
    'idRolUsuario',
    'estado',
    'acciones'
  ];

  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private _dialog: MatDialog,
    private _usuarioService: UsuariosService,
    private _rolUsuarioService: RolusuarioService,
    private _mensajeService: MensajesService,
    private _liveAnnouncer: LiveAnnouncer
  ) { }

  getRolDescripcion(idRol: number): string {
    if (!this.roles) {
      return '';
    }

    const rol = this.roles.find(r => r.id === idRol);
    return rol ? rol.descripcion : '';
  }



  obtenerRoles(): void {
    this._rolUsuarioService.getRolUsuarioList().subscribe(roles => {
      console.log(roles);
      this.roles = roles;
    });
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  ngOnInit(): void {
    this.getUsuarioList()
    this.obtenerRoles();
  }

  openAddEditUsuarioForm() {
    const dialogRef = this._dialog.open(AddEditUsuarioComponent)
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUsuarioList();
        }
      }
    });
  }

  getUsuarioList() {
    this._usuarioService.getUsuarioList().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  confirmarEliminacion(id: number, nombreCompleto: string) {
    const dialogRef = this._dialog.open(ConfirmacionComponent, {
      width: '350px',
      data: { mensaje: `¿Está seguro que desea eliminar a ${nombreCompleto}?` }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this._usuarioService.deleteUsuario(id).subscribe({
          next: (res) => {
            this._mensajeService.openSnackBar(`${nombreCompleto} ha sido eliminado`);
            this.getUsuarioList();
          },
          error: console.log
        })
      }
    })
  }

  deleteUsuario(id: number) {
    this._usuarioService.getUsuario(id).subscribe({
      next: (usuario) => {
        const nombreCompleto = `${usuario.nombre} ${usuario.apellido}`;
        this.confirmarEliminacion(id, nombreCompleto);
      },
      error: console.log,
    });
  }


  openEditForm(data: any) {
    const dialogRef = this._dialog.open(AddEditUsuarioComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUsuarioList();
        }
      }
    });
  }



}
