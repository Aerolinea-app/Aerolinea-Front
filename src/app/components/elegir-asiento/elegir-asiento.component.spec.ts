import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElegirAsientoComponent } from './elegir-asiento.component';

describe('ElegirAsientoComponent', () => {
  let component: ElegirAsientoComponent;
  let fixture: ComponentFixture<ElegirAsientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElegirAsientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ElegirAsientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
