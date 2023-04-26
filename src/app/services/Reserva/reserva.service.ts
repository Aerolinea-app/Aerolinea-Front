import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  constructor(
    private _http: HttpClient
  ) { }

  addReserva(nuevoReserva: any): Observable<any> {
    const id = this.generarNuevoId();
    nuevoReserva.id = id;
    return this._http.post('http://localhost:3000/reserva', nuevoReserva);
  }

  updateReserva(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/reserva/${id}`, data)
  }

  getReserva(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/reserva/${id}`)
  }


  getReservaList(): Observable<any> {
    return this._http.get('http://localhost:3000/reserva');
  }

  deleteReserva(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/reserva/${id}`)
  }

  private generarNuevoId(): string {
    const numero = Math.floor(Math.random() * 1000) + 1;
    return `RES-${numero.toString().padStart(3, '0')}`;
  }
}
