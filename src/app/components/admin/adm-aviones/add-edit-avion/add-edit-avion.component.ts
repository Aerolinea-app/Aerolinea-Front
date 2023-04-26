import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AvionService } from 'src/app/services/Avion/avion.service';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-edit-avion',
  templateUrl: './add-edit-avion.component.html',
  styleUrls: ['./add-edit-avion.component.css']
})
export class AddEditAvionComponent implements OnInit {

  avionForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _avionService: AvionService,
    private _dialogRef: MatDialogRef<AddEditAvionComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _mensajeService: MensajesService
  ) {
    this.avionForm = this._fb.group({
      id: '',
      aerolinea: '',
      estado: ''
    });
    if (this.data && this.data.aerolinea) {
      // Si estás editando un avión existente, extrae el número de avión de la cadena "AV-xxx"
      const numAvion = this.data.aerolinea.substring(3);
      this.avionForm.get('aerolinea').setValue(`AV-${numAvion}`);
      this.avionForm.patchValue(this.data);
    }
  }

  ngOnInit(): void {
    this.avionForm.patchValue(this.data)
  }

  onNoClick(): void {
    this._dialogRef.close(false);
  }

  onFormSubmit() {
    if (this.avionForm.valid) {

      const newAvion = {
        aerolinea: this.avionForm.get('aerolinea').value,
        estado: this.avionForm.get('estado').value
      }

      if (this.data) {
        this._avionService.updateAvion(this.data.id, this.avionForm.value).subscribe({
          next: (val: any) => {
            this._mensajeService.openSnackBar('Avion actualizado correctamente!')
            this._dialogRef.close(true);

            console.log(this.data)
          },
          error: (err: any) => {
            console.log(err)
          }
        });
      } else {
        this._avionService.addAvion(newAvion).subscribe({
          next: (val: any) => {
            this._mensajeService.openSnackBar('Avion añadido correctamente!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err)
          }
        });
      }
    }
  }
}

