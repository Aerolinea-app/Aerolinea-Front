import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservaService {
  constructor(private _http: HttpClient) {}

  addReserva(nuevoReserva: any): Observable<any> {
    return this._http.post(
      'http://localhost:8080/reserva/agregarReserva',
      nuevoReserva
    );
  }

  updateReserva(updateReserva: any): Observable<any> {
    return this._http.put(
      `http://localhost:8080/reserva/updateReserva`,
      updateReserva
    );
  }

  getReservaList(): Observable<any> {
    return this._http.get(`http://localhost:8080/reserva/obtenerReservas`);
  }

  getReservasActivasList(): Observable<any> {
    return this._http.get(
      `http://localhost:8080/reserva/obtenerReservasActivas`
    );
  }

  deleteReserva(id: number): Observable<any> {
    return this._http.delete(
      `http://localhost:8080/asiento/deleteAsiento/${id}`
    );
  }
}
