import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCiudadesComponent } from './adm-ciudades.component';

describe('AdmCiudadesComponent', () => {
  let component: AdmCiudadesComponent;
  let fixture: ComponentFixture<AdmCiudadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCiudadesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCiudadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
