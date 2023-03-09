import { Injectable } from '@angular/core';
import { Avion } from 'src/app/models/Avion';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  listAvion: Avion[] = [
    {
      numeroAvion: 'CO-2442',
      nombreAvion: 'Avion1',
      ciudadOrigen: 'Cali',
      ciudadDestino: 'Buenaventura',
      horaSalida: '03:45',
      horaLlegada: '16:00',
      minutosVuelo: '80',
      imgAvion: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Air_india_b747-400_vt-esn_arp.jpg'

    },
    {
      numeroAvion: 'CO-0001',
      nombreAvion: 'Avion2',
      ciudadOrigen: 'Buenaventura',
      ciudadDestino: 'Cali',
      horaSalida: '10:45',
      horaLlegada: '10:00',
      minutosVuelo: '80',
      imgAvion: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Air_india_b747-400_vt-esn_arp.jpg'

    },
  ]

  constructor() { }

  getAviones() {
    return this.listAvion.slice();
  }

  eliminarAvion(index: number) {
    this.listAvion.splice(index, 1);
  }

  agregarAvion(avion: Avion) {
    this.listAvion.unshift(avion)
  }

  getAvion(index: number) {
    return this.listAvion[index];
  }

  editAvion(avion: Avion, idAvion: number) {
    this.listAvion[idAvion].ciudadDestino = avion.ciudadDestino;
    this.listAvion[idAvion].ciudadOrigen = avion.ciudadOrigen;
    this.listAvion[idAvion].horaLlegada = avion.horaLlegada;
    this.listAvion[idAvion].horaSalida = avion.horaSalida;
    this.listAvion[idAvion].imgAvion = avion.imgAvion;
    this.listAvion[idAvion].minutosVuelo = avion.minutosVuelo;
    this.listAvion[idAvion].nombreAvion = avion.nombreAvion;
    this.listAvion[idAvion].numeroAvion = avion.numeroAvion;
  }
}
