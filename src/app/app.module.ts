import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './components/register/register.component';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { FiltradorComponent } from './components/vuelos/filtrador/filtrador.component';


import {MatNativeDateModule} from '@angular/material/core';
import { AdminComponent } from './components/admin/admin.component';
import { AdmNavbarComponent } from './shared/adm-navbar/adm-navbar.component';
import { AdmUsuariosComponent } from './components/admin/adm-usuarios/adm-usuarios.component';
import { HttpClientModule } from '@angular/common/http';
import { AddEditUsuarioComponent } from './components/admin/adm-usuarios/add-edit-usuario/add-edit-usuario.component';
import { ConfirmacionComponent } from './shared/confirmacion/confirmacion.component';
import { AdmAvionesComponent } from './components/admin/adm-aviones/adm-aviones.component';

import { AdmVuelosComponent } from './components/admin/adm-vuelos/adm-vuelos.component';
import { AddEditVueloComponent } from './components/admin/adm-vuelos/add-edit-vuelo/add-edit-vuelo.component';
import { AddEditAvionComponent } from './components/admin/adm-aviones/add-edit-avion/add-edit-avion.component';
import { AdmAeropuertosComponent } from './components/admin/adm-aeropuertos/adm-aeropuertos.component';
import { AddEditAeropuertoComponent } from './components/admin/adm-aeropuertos/add-edit-aeropuerto/add-edit-aeropuerto.component';
import { AdmTrayectosComponent } from './components/admin/adm-trayectos/adm-trayectos.component';
import { AddEditTrayectoComponent } from './components/admin/adm-trayectos/add-edit-trayecto/add-edit-trayecto.component';
import { DatePipe } from '@angular/common';
import { AdmFacturasComponent } from './components/admin/adm-facturas/adm-facturas.component';
import { AddEditFacturaComponent } from './components/admin/adm-facturas/add-edit-factura/add-edit-factura.component';
import { AdmTipoasientosComponent } from './components/admin/adm-tipoasientos/adm-tipoasientos.component';
import { AddEditTipoasientosComponent } from './components/admin/adm-tipoasientos/add-edit-tipoasientos/add-edit-tipoasientos.component';
import { AdmAsientosComponent } from './components/admin/adm-asientos/adm-asientos.component';
import { AddEditAsientoComponent } from './components/admin/adm-asientos/add-edit-asiento/add-edit-asiento.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    VuelosComponent,
    LoginComponent,
    RegisterComponent,
    FiltradorComponent,
    AdminComponent,
    AdmNavbarComponent,
    AdmUsuariosComponent,
    AddEditUsuarioComponent,
    ConfirmacionComponent,
    AdmAvionesComponent,
    AddEditAvionComponent,
    AdmVuelosComponent,
    AddEditVueloComponent,
    AdmAeropuertosComponent,
    AddEditAeropuertoComponent,
    AdmTrayectosComponent,
    AddEditTrayectoComponent,
    AdmFacturasComponent,
    AddEditFacturaComponent,
    AdmTipoasientosComponent,
    AddEditTipoasientosComponent,
    AdmAsientosComponent,
    AddEditAsientoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    MatNativeDateModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
