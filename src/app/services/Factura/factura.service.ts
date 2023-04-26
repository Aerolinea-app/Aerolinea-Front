import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(
    private _http: HttpClient
  ) { }

  addFactura(nuevoFactura: any): Observable<any> {
    const id = this.generarNuevoId();
    nuevoFactura.id = id;
    return this._http.post('http://localhost:3000/facturas', nuevoFactura);
  }

  updateFactura(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/facturas/${id}`, data)
  }

  getFactura(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/facturas/${id}`)
  }


  getFacturaList(): Observable<any> {
    return this._http.get('http://localhost:3000/facturas');
  }

  deleteFactura(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/facturas/${id}`)
  }

  private generarNuevoId(): string {
    const numero = Math.floor(Math.random() * 1000) + 1;
    return `FAC-${numero.toString().padStart(3, '0')}`;
  }
}
