import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmFacturasComponent } from './adm-facturas.component';

describe('AdmFacturasComponent', () => {
  let component: AdmFacturasComponent;
  let fixture: ComponentFixture<AdmFacturasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmFacturasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmFacturasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
