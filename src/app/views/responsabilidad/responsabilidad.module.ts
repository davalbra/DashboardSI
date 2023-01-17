import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResponsabilidadRoutingModule } from './responsabilidad-routing.module';
import { UsuarioResponsabilidadComponent } from './usuario-responsabilidad/usuario-responsabilidad.component';


@NgModule({
  declarations: [
    UsuarioResponsabilidadComponent
  ],
  imports: [
    CommonModule,
    ResponsabilidadRoutingModule
  ]
})
export class ResponsabilidadModule { }
