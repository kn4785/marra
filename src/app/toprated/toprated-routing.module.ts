import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TopratedPage } from './toprated.page';

const routes: Routes = [
  {
    path: '',
    component: TopratedPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TopratedPageRoutingModule {}
