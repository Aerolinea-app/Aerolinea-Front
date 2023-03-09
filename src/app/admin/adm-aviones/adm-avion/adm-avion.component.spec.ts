import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmAvionComponent } from './adm-avion.component';

describe('AdmAvionComponent', () => {
  let component: AdmAvionComponent;
  let fixture: ComponentFixture<AdmAvionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmAvionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdmAvionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
