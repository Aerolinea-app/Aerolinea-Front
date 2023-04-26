import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Aeropuerto } from 'src/app/models/Aeropuerto';
import { AeropuertoService } from 'src/app/services/Aeropuerto/aeropuerto.service';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';

@Component({
  selector: 'app-add-edit-aeropuerto',
  templateUrl: './add-edit-aeropuerto.component.html',
  styleUrls: ['./add-edit-aeropuerto.component.css']
})
export class AddEditAeropuertoComponent {

  aeropuertos: Aeropuerto[]
  aeropuertoForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _aeropuertoService: AeropuertoService,
    private _dialogRef: MatDialogRef<AddEditAeropuertoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _mensajeService: MensajesService,
  ) {
    this.aeropuertoForm = this._fb.group({
      id: '',
      nombre: '',
      iata: '',
      ubicacion: '',
      estado: '',
    });
    if (this.data && this.data.id) {
      // Si estás editando un vuelo existente, extrae el número de vuelo de la cadena "VUE-xxx"
      const numAeropuerto = this.data.id.substring(3);
      this.aeropuertoForm.get('id').setValue(`AV-${numAeropuerto}`);
      this.aeropuertoForm.patchValue(this.data);
    }
  }

  ngOnInit(): void {
    // Obtener el vuelo actual del formulario
    this.aeropuertoForm.patchValue(this.data);
  }

  onFormSubmit() {

    if (this.aeropuertoForm.valid) {
      if (this.data) {
        this._aeropuertoService.updateAeropuerto(this.data.id, this.aeropuertoForm.value)
          .subscribe({
            next: (val: any) => {
              this._mensajeService.openSnackBar('Aeropuertos actualizado correctamente!')
              this._dialogRef.close(true);
              console.log(this.data)
            },
            error: (err: any) => {
              console.log(err)
            }
          })
      } else {
        this._aeropuertoService.addAeropuerto(this.aeropuertoForm.value).subscribe({
          next: (val: any) => {
            this._mensajeService.openSnackBar('Aeropuerto actualizado correctamente!')
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
