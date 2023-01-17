import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioResponsabilidadComponent } from './usuario-responsabilidad/usuario-responsabilidad.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Responsabilidad',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'responsabilidad',
      },
      {
        path: 'usuarioResponsabilidad',
        component: UsuarioResponsabilidadComponent,
        data: {
          title: 'Responsabilidad',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResponsabilidadRoutingModule {}
