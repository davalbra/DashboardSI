import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Fidelidad',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'usuario',
      },
      {
        path: 'usuario',
        component: UsuarioComponent,
        data: {
          title: 'Fidelidad',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FidelidadRoutingModule {}
