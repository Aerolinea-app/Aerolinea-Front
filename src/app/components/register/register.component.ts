import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/Usuario';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';
import { UsuarioService } from 'src/app/services/Usuarios/usuario.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  registrationForm: FormGroup;

  constructor(
    private router: Router,
    private _formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private mensajesService: MensajesService
  ) {
    this.registrationForm = this._formBuilder.group({
      cedula: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      nombre: ['', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*')]],
      apellido: ['', [Validators.required, Validators.pattern('[a-zA-ZáéíóúÁÉÍÓÚñÑ ]*')]],
      correo: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}')]]
    });
  }


}
