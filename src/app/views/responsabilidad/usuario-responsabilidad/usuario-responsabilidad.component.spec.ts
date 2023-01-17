import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioResponsabilidadComponent } from './usuario-responsabilidad.component';

describe('UsuarioResponsabilidadComponent', () => {
  let component: UsuarioResponsabilidadComponent;
  let fixture: ComponentFixture<UsuarioResponsabilidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioResponsabilidadComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioResponsabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
