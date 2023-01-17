import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CampanaComponent } from './campana/campana.component';
import { CompraComponent } from './compra/compra.component';
import { VentaComponent } from './venta/venta.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Satisfacción',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'compra',
      },
      {
        path: 'compra',
        component: CompraComponent,
        data: {
          title: 'compra',
        },
      },
      {
        path: 'venta',
        component: VentaComponent,
        data: {
          title: 'Venta',
        },
      },
      {
        path: 'campana',
        component: CampanaComponent,
        data: {
          title: 'Campana',
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SatisfaccionRoutingModule {}
