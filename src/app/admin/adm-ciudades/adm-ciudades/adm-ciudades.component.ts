import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ciudad {
  nombreCiudad: string;
}

const ELEMENT_DATA: ciudad[] = [
  {nombreCiudad: 'Cali'},
  {nombreCiudad: 'Medellin'},
  {nombreCiudad: 'Buenaventura'},
  {nombreCiudad: 'Tulua'},
];

@Component({
  selector: 'app-adm-ciudades',
  templateUrl: './adm-ciudades.component.html',
  styleUrls: ['./adm-ciudades.component.css']
})
export class AdmCiudadesComponent implements OnInit {


  
  constructor(
  ){ 

  }
  ngOnInit(): void {
   
  
  }
}
