import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Avion } from 'src/app/models/Avion';
import { AvionService } from 'src/app/services/avion/avion.service';
import { MyValidations } from '../../../../utils/my-validation'

@Component({
  selector: 'app-adm-crear-avion',
  templateUrl: './adm-crear-avion.component.html',
  styleUrls: ['./adm-crear-avion.component.css']
})
export class AdmCrearAvionComponent implements OnInit {

  ciudades: any[] = ['Cali', 'Buenaventura', 'Medellin', 'Bogotá', 'Cartagena', 'Barranquilla', 'Amazonas']

  myFormAvion: FormGroup

  idAvion: any;

  accion = 'Agregar'

  ciudadOrigenElegida = ''
  ciudadDestinoElegida = ''

  constructor(
    private fb: FormBuilder,
    private _avionService: AvionService,
    private router: Router,
    private snackBar: MatSnackBar,
    private aRoute: ActivatedRoute

  ) {
    this.myFormAvion = fb.group({
      numeroAvion: ['', [
        Validators.required,
        Validators.pattern(/\d{4}/)
      ]],
      nombreAvion: ['', [
        Validators.required,
        Validators.pattern(/^[a-zA-Z0-9äöüÄÖÜ]*$/)
      ]],
      ciudadOrigen: ['', [
        Validators.required
      ]],
      ciudadDestino: ['', [
        Validators.required
      ]],
      horaSalida: ['', [
        Validators.required
      ]],
      horaLlegada: ['', [
        Validators.required
      ]],
      minVuelo: ['', [
        Validators.required,
        Validators.pattern('^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$')
      ]],
      imgAvion: [''],

    }, {
      validator: MyValidations.mismaCiudad
    })

    const idParam = 'id'
    this.idAvion = this.aRoute.snapshot.params[idParam];
  }

  ngOnInit(): void {
    if (this.idAvion !== undefined) {
      this.accion = 'Editar';
      this.esEditar();
    }
  }

  crearAvion() {
    const avion: Avion = {
      numeroAvion: this.myFormAvion.get('numeroAvion').value,
      nombreAvion: this.myFormAvion.get('nombreAvion').value,
      ciudadOrigen: this.myFormAvion.get('ciudadOrigen').value,
      ciudadDestino: this.myFormAvion.get('ciudadDestino').value,
      horaSalida: this.myFormAvion.get('horaSalida').value,
      horaLlegada: this.myFormAvion.get('horaLlegada').value,
      minutosVuelo: this.myFormAvion.get('minVuelo').value,
      imgAvion: this.myFormAvion.get('imgAvion').value,
    };

    if (this.idAvion !== undefined) {
      this.editarAvion(avion);
    } else {
      this.agregarAvion(avion)
    }
  }

  agregarAvion(avion: Avion) {

    // this._avionService.agregarAvion(avion)
    // this.snackBar.open('El avion fue registrado con éxito!', '', {
    //   duration: 3000
    // })
    // this.router.navigate(['/adm-aviones'])


    // if (this.ciudadDestinoElegida === this.ciudadOrigenElegida) {
    //   console.log('No se puede viajar al mismo sitio de origen')

    //   this.myFormAvion.invalid
    // }

    console.log(this.myFormAvion)

  }

  editarAvion(avion: Avion) {
    this._avionService.editAvion(avion, this.idAvion)
    this.snackBar.open('El avion fue actualizado con éxito!', '', {
      duration: 3000
    });
    this.router.navigate(['/adm-aviones'])
  }

  esEditar() {
    const avion: Avion = this._avionService.getAvion(this.idAvion)
    console.log(avion)
    this.myFormAvion.patchValue({
      numeroAvion: avion.numeroAvion,
      nombreAvion: avion.nombreAvion,
      ciudadOrigen: avion.ciudadOrigen,
      ciudadDestino: avion.ciudadDestino,
      horaSalida: avion.horaSalida,
      horaLlegada: avion.horaLlegada,
      minutosVuelo: avion.minutosVuelo,
      imgAvion: avion.imgAvion,
    })
  }


}

