import { Component } from '@angular/core';

@Component({
  selector: 'app-adm-crear-vuelo',
  templateUrl: './adm-crear-vuelo.component.html',
  styleUrls: ['./adm-crear-vuelo.component.css']
})
export class AdmCrearVueloComponent {

  accion = 'Crear'
  diaActual: Date = new Date()

  
}
