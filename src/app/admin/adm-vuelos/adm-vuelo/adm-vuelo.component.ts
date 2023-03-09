import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface vuelo {
  nombreAvion: string;
  ciudadOrigen: string;
  ciudadDestino: string;
  horaSalida: string;
  horaLlegada: string;
}

const ELEMENT_DATA: vuelo[] = [
  {nombreAvion: 'Hydrogen', ciudadOrigen: 'Cali', ciudadDestino: 'Buenaventura', horaSalida: '2:00 PM', horaLlegada: '3:40 PM' },
  {nombreAvion: 'Helium', ciudadOrigen: 'Cali', ciudadDestino: 'Buenaventura', horaSalida: '2:00 PM', horaLlegada: '3:40 PM' },
  {nombreAvion: 'Lithium', ciudadOrigen: 'Cali', ciudadDestino: 'Buenaventura', horaSalida: '2:00 PM', horaLlegada: '3:40 PM' },
  {nombreAvion: 'Beryllium', ciudadOrigen: 'Cali', ciudadDestino: 'Buenaventura', horaSalida: '2:00 PM', horaLlegada: '3:40 PM' },
];

@Component({
  selector: 'app-adm-vuelo',
  templateUrl: './adm-vuelo.component.html',
  styleUrls: ['./adm-vuelo.component.css']
})
export class AdmVueloComponent {

  displayedColumns: string[] = ['nombreAvion', 'ciudadOrigen', 'ciudadDestino', 'horaSalida', 'horaLlegada', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
