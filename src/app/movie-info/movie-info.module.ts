import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MovieInfoPageRoutingModule } from './movie-info-routing.module';

import { MovieInfoPage } from './movie-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MovieInfoPageRoutingModule
  ],
  declarations: [MovieInfoPage]
})
export class MovieInfoPageModule {}
