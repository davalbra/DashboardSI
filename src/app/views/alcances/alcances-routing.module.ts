import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrosComponent } from './registros/registros.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Alcances',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'registros',
      },
      {
        path: 'registros',
        component: RegistrosComponent,
        data: {
          title: 'Alcances',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AlcancesRoutingModule {}
