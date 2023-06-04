import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MensajesService } from 'src/app/services/Mensajes/mensajes.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private mensajesService: MensajesService
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      correo: ['', Validators.required],
      cedula: ['', Validators.required]
    });
  }

}
