import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Usuario } from 'src/app/models/Usuario';
import { FacturaService } from 'src/app/services/Factura/factura.service';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { UsuariosService } from 'src/app/services/Usuarios/usuarios.service';

@Component({
  selector: 'app-add-edit-factura',
  templateUrl: './add-edit-factura.component.html',
  styleUrls: ['./add-edit-factura.component.css']
})
export class AddEditFacturaComponent implements OnInit {

  today = new Date();
  facturaForm: FormGroup;

  usuarios: Usuario[]

  ngOnInit(): void {
    this.facturaForm.patchValue(this.data)
    this.obtenerUsuarios();
  }

  constructor(
    private _fb: FormBuilder,
    private _facturaService: FacturaService,
    private _dialogRef: MatDialogRef<AddEditFacturaComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _mensajeService: MensajesService,
    private _usuarioService: UsuariosService,
  ) {
    this.facturaForm = this._fb.group({
      id: '',
      idUsuario: '',
      fecha: '',
      estado: ''
    });

    if (this.data && this.data.id) {
      // Si estás editando un vuelo existente, extrae el número de vuelo de la cadena "VUE-xxx"
      const idFactura = this.data.id.substring(3);
      this.facturaForm.get('id').setValue(`FAC-${idFactura}`);
      this.facturaForm.patchValue(this.data);
    }
  }

  obtenerUsuarios(): void {
    this._usuarioService.getUsuarioList().subscribe(usuarios => {
      console.log(usuarios);
      this.usuarios = usuarios;
    });
  }

  onFormSubmit() {

    if (this.facturaForm.valid) {
      if (this.data) {
        this._facturaService.updateFactura(this.data.id, this.facturaForm.value)
          .subscribe({
            next: (val: any) => {
              this._mensajeService.openSnackBar('Factura actualizado correctamente!')
              this._dialogRef.close(true);
              console.log(this.data)
            },
            error: (err: any) => {
              console.log(err)
            }
          })
      } else {
        this._facturaService.addFactura(this.facturaForm.value).subscribe({
          next: (val: any) => {
            this._mensajeService.openSnackBar('Factura actualizado correctamente!')
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
