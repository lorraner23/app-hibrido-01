import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ContacsPage } from './contacs.page';

const routes: Routes = [
  {
    path: '',
    component: ContacsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContacsPageRoutingModule {}
