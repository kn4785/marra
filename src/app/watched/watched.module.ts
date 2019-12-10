import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WatchedPageRoutingModule } from './watched-routing.module';

import { WatchedPage } from './watched.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WatchedPageRoutingModule
  ],
  declarations: [WatchedPage]
})
export class WatchedPageModule {}
