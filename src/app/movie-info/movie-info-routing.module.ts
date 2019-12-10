import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MovieInfoPage } from './movie-info.page';

const routes: Routes = [
  {
    path: ':movieId',
    component: MovieInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MovieInfoPageRoutingModule {}
