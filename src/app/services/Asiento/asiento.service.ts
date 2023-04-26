import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsientoService {

  constructor(
    private _http: HttpClient
  ) { }

  addAsiento(nuevoAsiento: any): Observable<any> {
    const id = this.generarNuevoId();
    nuevoAsiento.id = id;
    return this._http.post('http://localhost:3000/asiento', nuevoAsiento);
  }

  updateAsiento(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/asiento/${id}`, data)
  }

  getAsiento(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/asiento/${id}`)
  }


  getAsientoList(): Observable<any> {
    return this._http.get('http://localhost:3000/asiento');
  }

  deleteAsiento(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/asiento/${id}`)
  }

  private generarNuevoId(): string {
    const numero = Math.floor(Math.random() * 1000) + 1;
    return `AS-${numero.toString().padStart(3, '0')}`;
  }
}
