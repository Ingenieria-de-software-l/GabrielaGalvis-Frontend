import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReferenciaComponent } from './formulario-referencia.component';

describe('FormularioReferenciaComponent', () => {
  let component: FormularioReferenciaComponent;
  let fixture: ComponentFixture<FormularioReferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioReferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
