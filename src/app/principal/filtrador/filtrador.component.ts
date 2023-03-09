import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-filtrador',
  templateUrl: './filtrador.component.html',
  styleUrls: ['./filtrador.component.css']
})
export class FiltradorComponent implements OnInit {

  minDate: Date;

  constructor() {
     const currentYear = new Date();
     this.minDate = new Date();

  }
  ngOnInit(): void {

  }
  



 

}
