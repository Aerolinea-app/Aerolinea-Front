import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmCrearAvionComponent } from './adm-crear-avion.component';

describe('AdmCrearAvionComponent', () => {
  let component: AdmCrearAvionComponent;
  let fixture: ComponentFixture<AdmCrearAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmCrearAvionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmCrearAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
