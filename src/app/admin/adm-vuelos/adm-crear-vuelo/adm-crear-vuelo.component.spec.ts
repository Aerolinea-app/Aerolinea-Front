import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCrearVueloComponent } from './adm-crear-vuelo.component';

describe('AdmCrearVueloComponent', () => {
  let component: AdmCrearVueloComponent;
  let fixture: ComponentFixture<AdmCrearVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCrearVueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCrearVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
