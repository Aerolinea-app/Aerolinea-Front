import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Avion } from 'src/app/models/Avion';
import { TipoAsiento } from 'src/app/models/TipoAsiento';
import { UbicacionAsiento } from 'src/app/models/UbicacionAsiento';
import { AsientoService } from 'src/app/services/Asiento/asiento.service';
import { AvionService } from 'src/app/services/Avion/avion.service';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { TipoasientoService } from 'src/app/services/TipoAsiento/tipoasiento.service';

@Component({
  selector: 'app-add-edit-asiento',
  templateUrl: './add-edit-asiento.component.html',
  styleUrls: ['./add-edit-asiento.component.css']
})
export class AddEditAsientoComponent implements OnInit {

  today = new Date();
  asientoForm: FormGroup;

  tiposAsientos: TipoAsiento[] = [];
  aviones: Avion[] = [];
  asientos: any[] = [];
  idAvionSeleccionado: string;
  ubicacionesDisponibles: UbicacionAsiento[] = []
  opcionesFila: number[];
  opcionesColumna: string[];

  ngOnInit(): void {
    this.asientoForm.patchValue(this.data)

    this._tipoAsientoService.getTipoAsientoList().subscribe((res: any) => {
      this.tiposAsientos = res;
    })

    this._avionService.getAvionList().subscribe((res: any) => {
      this.aviones = res
    })

    this.getUbicacionesDisponibles();
  }


  constructor(
    private _fb: FormBuilder,
    private _asientoService: AsientoService,
    private _dialogRef: MatDialogRef<AddEditAsientoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private _mensajeService: MensajesService,
    private _tipoAsientoService: TipoasientoService,
    private _avionService: AvionService,
  ) {
    this.asientoForm = this._fb.group({
      id: '',
      idTipoA: '',
      idAvion: '',
      ubicacion: this._fb.group({
        fila: '',
        columna: ''
      }),
      precio: '',
      estado: ''
    });

    if (this.data && this.data.id) {
      // Si estás editando un vuelo existente, extrae el número de vuelo de la cadena "VUE-xxx"
      const idasiento = this.data.id.substring(3);
      this.asientoForm.get('id').setValue(`FAC-${idasiento}`);
      this.asientoForm.patchValue(this.data);
    }
  }

  onAvionSeleccionado(event: any) {
    this.idAvionSeleccionado = event.value;
    this._asientoService.getAsientoList().subscribe((res: any) => {
      this.asientos = res.filter((asiento: any) => asiento.idAvion === this.idAvionSeleccionado);
      this.getUbicacionesDisponibles();
      this.actualizarOpcionesUbicacion();
    });
  }

  private getUbicacionesDisponibles() {
    const ubicacionesExistentes = this.asientos.map((asiento: any) => {
      return asiento.ubicacion;
    });
    this.ubicacionesDisponibles = [];
    for (let i = 0; i < 30; i++) {
      for (let j = 0; j < 6; j++) {
        const ubicacion: UbicacionAsiento = {
          fila: i,
          columna: String.fromCharCode(65 + j),
          pasillo: i === 14 ? "D" : (i === 15 ? "I" : "")
        };
        if (!ubicacionesExistentes.some((u: any) => u.fila === i && u.columna === ubicacion.columna)) {
          this.ubicacionesDisponibles.push(ubicacion);
        }
      }
    }
  }


  private actualizarOpcionesUbicacion() {
    const ubicacionControl = this.asientoForm.get('ubicacion');
    ubicacionControl.get('fila').setValue('');
    ubicacionControl.get('columna').setValue('');
    ubicacionControl.get('fila').enable();
    ubicacionControl.get('columna').enable();
    const opcionesFila = Array.from(new Set(this.ubicacionesDisponibles.map((ubicacion: UbicacionAsiento) => ubicacion.fila)));
    this.opcionesFila = opcionesFila.filter((fila: any) => fila !== '');
    this.opcionesColumna = [];
    this.ubicacionesDisponibles.filter((ubicacion: UbicacionAsiento) => ubicacion.fila === opcionesFila[0]).forEach((ubicacion: UbicacionAsiento) => {
      this.opcionesColumna.push(ubicacion.columna);
    });
  }


  onFilaSeleccionada(event: any) {
    const filaSeleccionada = event.value;
    const ubicacionesOcupadas = this.asientos.filter((asiento: any) => asiento.ubicacion.fila === filaSeleccionada).map((asiento: any) => asiento.ubicacion.columna);
    const ubicacionesDisponibles = this.ubicacionesDisponibles.filter((ubicacion: UbicacionAsiento) => ubicacion.fila === filaSeleccionada && !ubicacionesOcupadas.includes(ubicacion.columna));
    this.asientoForm.get('ubicacion.columna').setValue('');
    this.opcionesColumna = ubicacionesDisponibles.map((ubicacion: UbicacionAsiento) => ubicacion.columna);
  }


  onFormSubmit() {
    if (this.asientoForm.valid) {
      const idAvion = this.asientoForm.get('idAvion').value;
      const asientoExistente = this.asientos.find((asiento: any) => asiento.idAvion === idAvion);
      if (asientoExistente && !this.data) {
        this._mensajeService.openSnackBar('Ya existe un asiento con ese id de avión');
      } else {
        if (this.data) {
          this._asientoService.updateAsiento(this.data.id, this.asientoForm.value)
            .subscribe({
              next: (val: any) => {
                this._mensajeService.openSnackBar('asiento actualizado correctamente!')
                this._dialogRef.close(true);
                console.log(this.data)
              },
              error: (err: any) => {
                console.log(err)
              }
            })
        } else {
          this._asientoService.addAsiento(this.asientoForm.value)
            .subscribe({
              next: (val: any) => {
                this._mensajeService.openSnackBar('asiento creado correctamente!')
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



}
