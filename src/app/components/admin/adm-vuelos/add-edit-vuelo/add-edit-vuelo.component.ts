import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { forkJoin } from 'rxjs';
import { Aeropuerto } from 'src/app/models/Aeropuerto';
import { Avion } from 'src/app/models/Avion';
import { AeropuertoService } from 'src/app/services/Aeropuerto/aeropuerto.service';
import { AvionService } from 'src/app/services/Avion/avion.service';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { VueloService } from 'src/app/services/Vuelo/vuelo.service';

@Component({
  selector: 'app-add-edit-vuelo',
  templateUrl: './add-edit-vuelo.component.html',
  styleUrls: ['./add-edit-vuelo.component.css']
})

export class AddEditVueloComponent {

  aviones: Avion[]
  aeropuertos: Aeropuerto[];

  vueloForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _vueloService: VueloService,
    private _dialogRef: MatDialogRef<AddEditVueloComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _mensajeService: MensajesService,
    private _avionService: AvionService,
    private _aeropuertoService: AeropuertoService
  ) {
    this.vueloForm = this._fb.group({
      id: '',
      idAeropuertoOrigen: '',
      idAeropuertoDestino: '',
      precio: '',
      fechaHoraSalida: '',
      fechaHoraLlegada: '',
      precioAsientoPreferencial: '',
      precioAsientoVip: '',
      precioAsientoTurista: '',
      estado: ''
    });
    if (this.data && this.data.id) {
      // Si estás editando un vuelo existente, extrae el número de vuelo de la cadena "VUE-xxx"
      const numVuelo = this.data.id.substring(3);
      this.vueloForm.get('id').setValue(`VUE-${numVuelo}`);
      this.vueloForm.patchValue(this.data);
    }
  }

  ngOnInit(): void {
    // Obtener el vuelo actual del formulario
    this.vueloForm.patchValue(this.data);

    this._aeropuertoService.getAeropuertoList().subscribe((data) => {
      this.aeropuertos = data;
    });
  }

  onNoClick(): void {
    this._dialogRef.close(false);
  }


  onFormSubmit() {
    if (this.vueloForm.valid) {

      const newVuelo = {
        idAeropuertoOrigen: this.vueloForm.get('idAeropuertoOrigen').value,
        idAeropuertoDestino: this.vueloForm.get('idAeropuertoDestino').value,
        precio: this.vueloForm.get('precio').value,
        fechaHoraSalida: this.vueloForm.get('fechaHoraSalida').value,
        fechaHoraLlegada: this.vueloForm.get('fechaHoraLlegada').value,
        precioAsientoPreferencial: this.vueloForm.get('precioAsientoPreferencial').value,
        precioAsientoVip: this.vueloForm.get('precioAsientoVip').value,
        precioAsientoTurista: this.vueloForm.get('precioAsientoTurista').value,
        estado: this.vueloForm.get('estado').value,
      };

      if (this.data) {
        this._vueloService.updateVuelo(this.data.id, this.vueloForm.value).subscribe({
          next: (val: any) => {
            this._mensajeService.openSnackBar('Vuelo actualizado correctamente!');
            this._dialogRef.close(true);
            console.log(this.data);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      } else {
        this._vueloService.addVuelo(newVuelo).subscribe({
          next: (val: any) => {
            this._mensajeService.openSnackBar('Vuelo añadido correctamente!');
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.log(err);
          }
        });
      }
    }
  }
}

