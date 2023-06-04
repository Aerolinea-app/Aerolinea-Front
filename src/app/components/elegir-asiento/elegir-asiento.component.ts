import { Component, OnInit } from '@angular/core';
import { Vuelo } from 'src/app/models/Vuelo';
import { Asiento } from 'src/app/models/Asiento';
import { ActivatedRoute, Router } from '@angular/router';
import { VueloService } from 'src/app/services/Vuelo/vuelo.service';
import { AsientoService } from 'src/app/services/Asiento/asiento.service';
import { UsuarioService } from 'src/app/services/Usuarios/usuario.service';

@Component({
  selector: 'app-elegir-asiento',
  templateUrl: './elegir-asiento.component.html',
  styleUrls: ['./elegir-asiento.component.css']
})
export class ElegirAsientoComponent implements OnInit {
  vuelo: Vuelo;
  vipSeats: Asiento[];
  preferentialSeats: Asiento[];
  turistaSeats: Asiento[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private _vueloService: VueloService,
    private _usuarioService: UsuarioService,
  ) {
  }

  ngOnInit(): void {
    const vueloId = this.route.snapshot.paramMap.get('id');
    // this._vueloService.getVuelo(vueloId).subscribe((vuelo: Vuelo) => {
    //   this.vuelo = vuelo;
    //   this.vipSeats = vuelo.asientosDisponibles.filter(seat => seat.tipoAsiento === 'Asiento VIP');
    //   this.preferentialSeats = vuelo.asientosDisponibles.filter(seat => seat.tipoAsiento === 'Asiento Preferencial');
    //   this.turistaSeats = vuelo.asientosDisponibles.filter(seat => seat.tipoAsiento === 'Asiento Turista');
    // });

  }

  toggleSeatSelection(seat: Asiento): void {
    if (seat.estado === 'reservado') {
      seat.estado = 'disponible';
    } else {
      seat.estado = 'reservado';
    }
  }
}
