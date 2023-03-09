import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCiudadesOpcionesComponent } from './adm-ciudades-opciones.component';

describe('AdmCiudadesOpcionesComponent', () => {
  let component: AdmCiudadesOpcionesComponent;
  let fixture: ComponentFixture<AdmCiudadesOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCiudadesOpcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCiudadesOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
