import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmTrayectosComponent } from './adm-trayectos.component';

describe('AdmTrayectosComponent', () => {
  let component: AdmTrayectosComponent;
  let fixture: ComponentFixture<AdmTrayectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmTrayectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmTrayectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
