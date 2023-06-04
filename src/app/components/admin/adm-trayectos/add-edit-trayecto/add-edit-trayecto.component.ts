import { Component, Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Aeropuerto } from 'src/app/models/Aeropuerto';
import { Avion } from 'src/app/models/Avion';
import { Vuelo } from 'src/app/models/Vuelo';
import { AvionService } from 'src/app/services/Avion/avion.service';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { VueloService } from 'src/app/services/Vuelo/vuelo.service';
import { TrayectoService } from 'src/app/services/trayecto/trayecto.service';

@Component({
  selector: 'app-add-edit-trayecto',
  templateUrl: './add-edit-trayecto.component.html',
  styleUrls: ['./add-edit-trayecto.component.css']
})
export class AddEditTrayectoComponent {

  avionesDisponibles: Avion[]
  vuelosDisponibles: Vuelo[];

  aeropuertos: Aeropuerto[]

  selectedVuelo: any;
  selectedFechaHoraSalida: Date;

  trayectoForm: FormGroup;

  constructor(
    private _fb: FormBuilder,
    private _trayectoService: TrayectoService,
    private _vueloService: VueloService,
    private _dialogRef: MatDialogRef<AddEditTrayectoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _mensajeService: MensajesService,
    private _avionService: AvionService,
  ) {
    this.trayectoForm = this._fb.group({
      id: '',
      idAvion: '',
      idVuelo: '',
      idAeropuertoOrigen: '',
      idAeropuertoDestino: '',
      horaSalida: '',
      horaLlegada: '',
      estado: '',
    });

    this.selectedFechaHoraSalida = null;
    this.selectedVuelo = {};

    if (this.data && this.data.id) {
      // Si estás editando un vuelo existente, extrae el número de vuelo de la cadena "VUE-xxx"
      const numTrayecto = this.data.id.substring(3);
      this.trayectoForm.get('id').setValue(`TRA-${numTrayecto}`);
      this.trayectoForm.patchValue(this.data);
    }
  }

  ngOnInit(): void {
    // Obtener el trayecto actual del formulario
    this.trayectoForm.patchValue(this.data);
    this.getVuelosDisponibles();
    this.getAvionesDisponibles();

    // this.trayectoForm.get('idVuelo').setValue(this.data.idVuelo);

    this.trayectoForm.get('idVuelo').valueChanges.subscribe((value) => {
      this.selectedVuelo = value;
      this.trayectoForm.get('idAeropuertoDestino').setValue(value?.idAeropuertoDestino);
      this.trayectoForm.get('idAeropuertoOrigen').setValue(value?.idAeropuertoOrigen);
    });
  }

  getAvionesDisponibles() {
    this._avionService.getAvionList().subscribe((data) => {
      this.avionesDisponibles = data;
      // verificar si los datos están disponibles antes de utilizarlos
      if (this.selectedVuelo) {
        this.trayectoForm.get('idAeropuertoDestino').setValue(this.selectedVuelo.idAeropuertoDestino);
        this.trayectoForm.get('idAeropuertoOrigen').setValue(this.selectedVuelo.idAeropuertoOrigen);
      }
    });
  }


  getVuelosDisponibles() {
    this._vueloService.getVueloList().subscribe((data) => {
      this.vuelosDisponibles = data;
      // verificar si los datos están disponibles antes de utilizarlos
      if (this.selectedVuelo) {
        this.trayectoForm.get('idAeropuertoDestino').setValue(this.selectedVuelo.idAeropuertoDestino);
        this.trayectoForm.get('idAeropuertoOrigen').setValue(this.selectedVuelo.idAeropuertoOrigen);
      }
    });
  }


  onNoClick(): void {
    this._dialogRef.close(false);
  }

  onFormSubmit() {
    if (this.trayectoForm.valid) {
      const newTrayecto = {
        idAvion: this.trayectoForm.get('idAvion').value.id,
        idVuelo: this.trayectoForm.get('idVuelo').value.id,
        idAeropuertoDestino: this.trayectoForm.get('idAeropuertoDestino').value,
        idAeropuertoOrigen: this.trayectoForm.get('idAeropuertoOrigen').value,
        horaSalida: this.trayectoForm.get('horaSalida').value,
        horaLlegada: this.trayectoForm.get('horaLlegada').value,
        estado: this.trayectoForm.get('estado').value,
      };

      if (this.data && this.data.id) {
        const updatedTrayecto = Object.assign({}, this.data, newTrayecto);
        this._trayectoService.updateTrayecto(this.data.id, updatedTrayecto).subscribe((result) => {
          if (result) {
            this._mensajeService.openSnackBar('Trayecto actualizado correctamente');
            this._dialogRef.close(true);
          } else {
            this._mensajeService.openSnackBar('Error al actualizar el trayecto');
          }
        });
      } else {
        this._trayectoService.addTrayecto(newTrayecto).subscribe((result) => {
          if (result) {
            this._mensajeService.openSnackBar('Trayecto creado correctamente');
            this._dialogRef.close(true);
          } else {
            this._mensajeService.openSnackBar('Error al crear el trayecto');
          }
        });
      }
      // actualizar this.data con los nuevos valores
      this.data = newTrayecto;
    }
  }


}
