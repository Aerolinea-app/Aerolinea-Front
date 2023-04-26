import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(
    private _http: HttpClient
  ) { }

  addUsuario(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/usuarios', data);
  }

  updateUsuario(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/usuarios/${id}`, data)
  }

  getUsuario(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/usuarios/${id}`)
  }
  

  getUsuarioList(): Observable<any> {
    return this._http.get('http://localhost:3000/usuarios');
  }

  deleteUsuario(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/usuarios/${id}`)
  }
}
