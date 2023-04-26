import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeropuertoService {

  constructor(
    private _http: HttpClient
  ) { }

  addAeropuerto(nuevoAeropuerto: any): Observable<any> {
    const id = this.generarNuevoId();
    nuevoAeropuerto.id = id;
    return this._http.post('http://localhost:3000/aeropuerto', nuevoAeropuerto);
  }

  updateAeropuerto(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/aeropuerto/${id}`, data)
  }

  getAeropuerto(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/aeropuerto/${id}`)
  }


  getAeropuertoList(): Observable<any> {
    return this._http.get('http://localhost:3000/aeropuerto');
  }

  deleteAeropuerto(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/aeropuerto/${id}`)
  }

  private generarNuevoId(): string {
    const numero = Math.floor(Math.random() * 1000) + 1;
    return `AE-${numero.toString().padStart(3, '0')}`;
  }
}
