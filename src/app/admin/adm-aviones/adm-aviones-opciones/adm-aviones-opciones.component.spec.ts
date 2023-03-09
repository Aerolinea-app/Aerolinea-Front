import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAvionesOpcionesComponent } from './adm-aviones-opciones.component';

describe('AdmAvionesOpcionesComponent', () => {
  let component: AdmAvionesOpcionesComponent;
  let fixture: ComponentFixture<AdmAvionesOpcionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmAvionesOpcionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmAvionesOpcionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
