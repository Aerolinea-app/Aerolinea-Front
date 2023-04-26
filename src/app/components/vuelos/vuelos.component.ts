import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/models/Vuelo';
import { VueloService } from 'src/app/services/Vuelo/vuelo.service';


@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css']
})
export class VuelosComponent implements OnInit {

  vuelos: Vuelo[] = []

  constructor(
    private _vueloService: VueloService
  ) { }

  ngOnInit(): void {
    this._vueloService.getVueloList().subscribe((vuelos: Vuelo[]) => {
      this.vuelos = vuelos;
    });
  }
}
