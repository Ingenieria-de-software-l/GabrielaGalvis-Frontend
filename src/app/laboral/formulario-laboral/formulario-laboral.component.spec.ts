import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioLaboralComponent } from './formulario-laboral.component';

describe('FormularioLaboralComponent', () => {
  let component: FormularioLaboralComponent;
  let fixture: ComponentFixture<FormularioLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
