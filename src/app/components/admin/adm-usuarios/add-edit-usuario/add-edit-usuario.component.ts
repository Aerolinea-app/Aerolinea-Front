import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { RolUsuario } from 'src/app/models/RolUsuario';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { RolusuarioService } from 'src/app/services/RolUsuario/rolusuario.service';
import { UsuariosService } from 'src/app/services/Usuarios/usuarios.service';

@Component({
  selector: 'app-add-edit-usuario',
  templateUrl: './add-edit-usuario.component.html',
  styleUrls: ['./add-edit-usuario.component.css']
})
export class AddEditUsuarioComponent implements OnInit {

  usuarioForm: FormGroup;

  roles: RolUsuario[]

  constructor(
    private _fb: FormBuilder,
    private _usuarioService: UsuariosService,
    private _dialogRef: MatDialogRef<AddEditUsuarioComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _mensajeService: MensajesService,
    private _rolUsuarioService: RolusuarioService,
  ) {
    this.usuarioForm = this._fb.group({
      id: '',
      idRolUsuario: '',
      nombre: '',
      apellido: '',
      cedula: '',
      correo: '',
      estado: ''
    })
  }

  ngOnInit(): void {
    this.usuarioForm.patchValue(this.data)
    this.obtenerRoles();
  }

  obtenerRoles(): void {
    this._rolUsuarioService.getRolUsuarioList().subscribe(roles => {
      console.log(roles);
      this.roles = roles;
    });
  }



  onFormSubmit() {

    if (this.usuarioForm.valid) {
      if (this.data) {
        this._usuarioService.updateUsuario(this.data.id, this.usuarioForm.value)
          .subscribe({
            next: (val: any) => {
              this._mensajeService.openSnackBar('Usuario actualizado correctamente!')
              this._dialogRef.close(true);
              console.log(this.data)
            },
            error: (err: any) => {
              console.log(err)
            }
          })
      } else {
        this._usuarioService.addUsuario(this.usuarioForm.value).subscribe({
          next: (val: any) => {
            this._mensajeService.openSnackBar('Usuario actualizado correctamente!')
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err)
          }
        })
      }

    }

  }

}
