import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Aeropuerto } from 'src/app/models/Aeropuerto';
import { Vuelo } from 'src/app/models/Vuelo';
import { AeropuertoService } from 'src/app/services/Aeropuerto/aeropuerto.service';
import { VueloService } from 'src/app/services/Vuelo/vuelo.service';

@Component({
  selector: 'app-detalle-vuelo',
  templateUrl: './detalle-vuelo.component.html',
  styleUrls: ['./detalle-vuelo.component.css'],
})
export class DetalleVueloComponent implements OnInit {
  vuelo: Vuelo;
  aeropuertos: Aeropuerto[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private vueloService: VueloService,
    private aeropuertoService: AeropuertoService
  ) {
    this.activatedRoute.paramMap.subscribe((params) => {
      const vueloId = params.get('id');
      if (vueloId) {
        // this.getVuelo(vueloId);
        this.getAeropuertos(); // Obtener la lista de aeropuertos
      }
    });
  }

  ngOnInit(): void {}

  getVuelo(vueloId: number): void {
    this.vueloService.getVuelo(vueloId).subscribe((vuelo) => {
      this.vuelo = vuelo;
    });
  }

  getAeropuertos(): void {
    this.aeropuertoService.getAeropuertoList().subscribe((aeropuertos) => {
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

  getNombreAeropuerto(aeropuertoId: number): string {
    const aeropuerto = this.aeropuertos.find(
      (a) => a.idAeropuerto === aeropuertoId
    );
    return aeropuerto ? aeropuerto.nombre : '';
  }
}
