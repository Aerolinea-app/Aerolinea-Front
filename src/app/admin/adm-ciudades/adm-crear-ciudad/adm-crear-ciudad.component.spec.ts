import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCrearCiudadComponent } from './adm-crear-ciudad.component';

describe('AdmCrearCiudadComponent', () => {
  let component: AdmCrearCiudadComponent;
  let fixture: ComponentFixture<AdmCrearCiudadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCrearCiudadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCrearCiudadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
