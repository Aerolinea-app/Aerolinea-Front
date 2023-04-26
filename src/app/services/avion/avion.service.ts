import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvionService {

  constructor(
    private _http: HttpClient
  ) { }

  addAvion(nuevoAvion: any): Observable<any> {
    const id = this.generarNuevoId();
    nuevoAvion.id = id;
    return this._http.post('http://localhost:3000/aviones', nuevoAvion);
  }

  updateAvion(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/aviones/${id}`, data)
  }

  getAvion(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/aviones/${id}`)
  }


  getAvionList(): Observable<any> {
    return this._http.get('http://localhost:3000/aviones');
  }

  deleteAvion(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/aviones/${id}`)
  }

  private generarNuevoId(): string {
    const numero = Math.floor(Math.random() * 1000) + 1;
    return `AV-${numero.toString().padStart(3, '0')}`;
  }
}
