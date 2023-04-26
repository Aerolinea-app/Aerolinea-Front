import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VueloService {

  constructor(
    private _http: HttpClient
  ) { }

  addVuelo(nuevoVuelo: any): Observable<any> {
    const id = this.generarNuevoId();
    nuevoVuelo.id = id;
    return this._http.post('http://localhost:3000/vuelos', nuevoVuelo);
  }

  updateVuelo(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/vuelos/${id}`, data)
  }

  getVuelo(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/vuelos/${id}`)
  }


  getVueloList(): Observable<any> {
    return this._http.get('http://localhost:3000/vuelos');
  }

  deleteVuelo(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/vuelos/${id}`)
  }

  private generarNuevoId(): string {
    const numero = Math.floor(Math.random() * 1000) + 1;
    return `VUE-${numero.toString().padStart(3, '0')}`;
  }
}
