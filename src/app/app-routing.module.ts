import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { VuelosComponent } from './components/vuelos/vuelos.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AdminComponent } from './components/admin/admin.component';
import { AdmUsuariosComponent } from './components/admin/adm-usuarios/adm-usuarios.component';
import { AdmAvionesComponent } from './components/admin/adm-aviones/adm-aviones.component';
import { AdmVuelosComponent } from './components/admin/adm-vuelos/adm-vuelos.component';
import { AdmAeropuertosComponent } from './components/admin/adm-aeropuertos/adm-aeropuertos.component';
import { AdmTrayectosComponent } from './components/admin/adm-trayectos/adm-trayectos.component';
import { AdmFacturasComponent } from './components/admin/adm-facturas/adm-facturas.component';
import { AdmTipoasientosComponent } from './components/admin/adm-tipoasientos/adm-tipoasientos.component';
import { AdmAsientosComponent } from './components/admin/adm-asientos/adm-asientos.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'vuelos', component: VuelosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent},
  { path: 'admin/adm-usuarios', component: AdmUsuariosComponent},
  { path: 'admin/adm-aviones', component: AdmAvionesComponent},
  { path: 'admin/adm-vuelos', component: AdmVuelosComponent},
  { path: 'admin/adm-aeropuertos', component: AdmAeropuertosComponent},
  { path: 'admin/adm-trayectos', component: AdmTrayectosComponent},
  { path: 'admin/adm-facturas', component: AdmFacturasComponent},
  { path: 'admin/adm-tipoasientos', component: AdmTipoasientosComponent},
  { path: 'admin/adm-asientos', component: AdmAsientosComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
