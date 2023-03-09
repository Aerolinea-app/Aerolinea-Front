// Modulos

import { FormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './shared/angular-material/angular-material.module';
import { ReactiveFormsModule } from '@angular/forms'


// Componentes
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PrincipalComponent } from './principal/principal.component';
import NavbarComponent from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FiltradorComponent } from './principal/filtrador/filtrador.component';
import { AdminComponent } from './admin/admin.component';
import { OpcionesComponent } from './admin/opciones/opciones.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { AdmVuelosComponent } from './admin/adm-vuelos/adm-vuelos.component';
import { AdmCiudadesComponent } from './admin/adm-ciudades/adm-ciudades.component';
import { AdmAvionesComponent } from './admin/adm-aviones/adm-aviones.component';
import { AdmCrearAvionComponent } from './admin/adm-aviones/adm-crear-avion/adm-crear-avion.component';
import { AdmAvionComponent } from './admin/adm-aviones/adm-avion/adm-avion.component';
import { AdmAvionesOpcionesComponent } from './admin/adm-aviones/adm-aviones-opciones/adm-aviones-opciones.component';
import { AdmVueloComponent } from './admin/adm-vuelos/adm-vuelo/adm-vuelo.component';
import { AdmCrearVueloComponent } from './admin/adm-vuelos/adm-crear-vuelo/adm-crear-vuelo.component';
import { AdmVuelosOpcionesComponent } from './admin/adm-vuelos/adm-vuelos-opciones/adm-vuelos-opciones.component';
import { AdmCrearCiudadComponent } from './admin/adm-ciudades/adm-crear-ciudad/adm-crear-ciudad.component';
import { AdmCiudadesOpcionesComponent } from './admin/adm-ciudades/adm-ciudades-opciones/adm-ciudades-opciones.component';
import { ListVuelosComponent } from './principal/list-vuelos/list-vuelos.component';
import { CardVueloComponent } from './principal/list-vuelos/card-vuelo/card-vuelo.component';
import { VueloComponent } from './principal/vuelo/vuelo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PrincipalComponent,
    NavbarComponent,
    FooterComponent,
    FiltradorComponent,
    AdminComponent,
    OpcionesComponent,
    NavbarAdminComponent,
    AdmVuelosComponent,
    AdmCiudadesComponent,
    AdmAvionesComponent,
    AdmCrearAvionComponent,
    AdmAvionComponent,
    AdmAvionesOpcionesComponent,
    AdmVueloComponent,
    AdmCrearVueloComponent,
    AdmVuelosOpcionesComponent,
    AdmCrearCiudadComponent,
    AdmCiudadesOpcionesComponent,
    ListVuelosComponent,
    CardVueloComponent,
    VueloComponent,
  ],
  imports: [ 
    FormsModule, 
    MbscModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
