import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolusuarioService {

  constructor(
    private _http: HttpClient
  ) { }

  addRolUsuario(nuevoRolUsuario: any): Observable<any> {
    const id = this.generarNuevoId();
    nuevoRolUsuario.id = id;
    return this._http.post('http://localhost:3000/rolusuario', nuevoRolUsuario);
  }

  updateRolUsuario(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/rolusuario/${id}`, data)
  }

  getRolUsuario(id: number): Observable<any> {
    return this._http.get(`http://localhost:3000/rolusuario/${id}`)
  }


  getRolUsuarioList(): Observable<any> {
    return this._http.get('http://localhost:3000/rolusuario');
  }

  deleteRolUsuario(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/rolusuario/${id}`)
  }

  private generarNuevoId(): string {
    const numero = Math.floor(Math.random() * 1000) + 1;
    return `ROL-${numero.toString().padStart(3, '0')}`;
  }
}
