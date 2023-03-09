import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdmAvionComponent } from './admin/adm-aviones/adm-avion/adm-avion.component';
import { AdmAvionesOpcionesComponent } from './admin/adm-aviones/adm-aviones-opciones/adm-aviones-opciones.component';
import { AdmAvionesComponent } from './admin/adm-aviones/adm-aviones.component';
import { AdmCrearAvionComponent } from './admin/adm-aviones/adm-crear-avion/adm-crear-avion.component';
import { AdmCiudadesOpcionesComponent } from './admin/adm-ciudades/adm-ciudades-opciones/adm-ciudades-opciones.component';
import { AdmCiudadesComponent } from './admin/adm-ciudades/adm-ciudades.component';
import { AdmCrearCiudadComponent } from './admin/adm-ciudades/adm-crear-ciudad/adm-crear-ciudad.component';
import { AdmCrearVueloComponent } from './admin/adm-vuelos/adm-crear-vuelo/adm-crear-vuelo.component';
import { AdmVueloComponent } from './admin/adm-vuelos/adm-vuelo/adm-vuelo.component';
import { AdmVuelosOpcionesComponent } from './admin/adm-vuelos/adm-vuelos-opciones/adm-vuelos-opciones.component';
import { AdmVuelosComponent } from './admin/adm-vuelos/adm-vuelos.component';
import { AdminComponent } from './admin/admin.component';
import { OpcionesComponent } from './admin/opciones/opciones.component';
import { HomeComponent } from './home/home.component';
import { FiltradorComponent } from './principal/filtrador/filtrador.component';
import { PrincipalComponent } from './principal/principal.component';
import { VueloComponent } from './principal/vuelo/vuelo.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'principal', component: PrincipalComponent, children: [
    { path: '', component: FiltradorComponent },
  ]},
  { path: 'vuelo', component: VueloComponent},
  { path: 'admin', component: AdminComponent, children: [
    { path: '', component: OpcionesComponent},
    { path: 'adm-aviones', component: AdmAvionesComponent, children: [
      { path: '', component: AdmAvionesOpcionesComponent},
      { path: 'adm-crear-avion', component: AdmCrearAvionComponent},
      { path: 'adm-avion', component: AdmAvionComponent},
      { path: '***', component: AdminComponent},
    ]},
    { path: 'adm-vuelos', component: AdmVuelosComponent, children: [
      { path: '', component: AdmVuelosOpcionesComponent},
      { path: 'adm-crear-vuelo', component: AdmCrearVueloComponent},
      { path: 'adm-vuelo', component: AdmVueloComponent},
      { path: '***', component: AdminComponent},
    ]},
    { path: 'adm-ciudades', component: AdmCiudadesComponent, children: [
      { path: '', component: AdmCiudadesOpcionesComponent},
      { path: 'adm-crear-ciudad', component: AdmCrearCiudadComponent},
      { path: 'adm-ciudad', component: AdmCiudadesComponent},
      { path: '***', component: AdminComponent},
    ]},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
