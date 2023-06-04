import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Aeropuerto } from 'src/app/models/Aeropuerto';
import { Vuelo } from 'src/app/models/Vuelo';
import { AeropuertoService } from 'src/app/services/Aeropuerto/aeropuerto.service';
import { VueloService } from 'src/app/services/Vuelo/vuelo.service';

@Component({
  selector: 'app-vuelos',
  templateUrl: './vuelos.component.html',
  styleUrls: ['./vuelos.component.css'],
})
export class VuelosComponent implements OnInit {
  aeropuertos: Aeropuerto[] = [];
  vuelos: Vuelo[] = [];

  constructor(
    private _vueloService: VueloService,
    private _aeropuertoService: AeropuertoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this._vueloService.getVueloActivoList().subscribe((vuelos: Vuelo[]) => {
      this.vuelos = vuelos;
    });

    this._aeropuertoService
      .getAeropuertoList()
      .subscribe((aeropuertos: Aeropuerto[]) => {
        this.aeropuertos = aeropuertos;
      });
  }

  getUbicacionAeropuerto(idAeropuerto: number) {
    if (!this.aeropuertos) {
      return '';
    }

    const aeropuerto = this.aeropuertos.find(
      (r) => r.idAeropuerto === idAeropuerto
    );
    return aeropuerto ? aeropuerto.ubicacion : '';
  }

  getImagenAeropuerto(idAeropuerto: number) {
    if (!this.aeropuertos) {
      return '';
    }

    const aeropuerto = this.aeropuertos.find(
      (r) => r.idAeropuerto === idAeropuerto
    );
    return aeropuerto ? aeropuerto : '';
  }

  verDetalleVuelo(idVuelo: number) {
    const idVueloStr = idVuelo.toString(); // Conversión a string
    this.router.navigate(['/detalle-vuelo', idVueloStr]);
  }
}
