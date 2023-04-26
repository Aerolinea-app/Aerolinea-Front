import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditTrayectoComponent } from './add-edit-trayecto.component';

describe('AddEditTrayectoComponent', () => {
  let component: AddEditTrayectoComponent;
  let fixture: ComponentFixture<AddEditTrayectoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditTrayectoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddEditTrayectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
