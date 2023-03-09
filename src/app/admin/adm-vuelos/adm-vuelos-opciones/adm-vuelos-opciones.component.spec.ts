import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmVuelosOpcionesComponent } from './adm-vuelos-opciones.component';

describe('AdmVuelosOpcionesComponent', () => {
  let component: AdmVuelosOpcionesComponent;
  let fixture: ComponentFixture<AdmVuelosOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmVuelosOpcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmVuelosOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
