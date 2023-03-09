import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

export interface avion {
  numAvion: string;
  nombreAvion: string;
  imagen: string;
}

const ELEMENT_DATA: avion[] = [
  {numAvion: '0001', nombreAvion: 'Avion1' , imagen: ''},
  {numAvion: '0002', nombreAvion: 'Avion2' , imagen: ''},
  {numAvion: '0003', nombreAvion: 'Avion3' , imagen: ''},
  {numAvion: '0004', nombreAvion: 'Avion4' , imagen: ''},
];

@Component({
  selector: 'app-adm-avion',
  templateUrl: './adm-avion.component.html',
  styleUrls: ['./adm-avion.component.css']

  
})


export class AdmAvionComponent implements OnInit {

  displayedColumns: string[] = ['numAvion', 'nombreAvion', 'imagen', 'acciones'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  
  
  constructor(
  ){ 

  }
  ngOnInit(): void {
   
  
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
