import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmVueloComponent } from './adm-vuelo.component';

describe('AdmVueloComponent', () => {
  let component: AdmVueloComponent;
  let fixture: ComponentFixture<AdmVueloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmVueloComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmVueloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
