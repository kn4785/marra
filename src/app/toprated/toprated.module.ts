import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TopratedPageRoutingModule } from './toprated-routing.module';

import { TopratedPage } from './toprated.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TopratedPageRoutingModule
  ],
  declarations: [TopratedPage]
})
export class TopratedPageModule {}
