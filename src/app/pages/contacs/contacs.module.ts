import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ContacsPageRoutingModule } from './contacs-routing.module';

import { ContacsPage } from './contacs.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ContacsPageRoutingModule
  ],
  declarations: [ContacsPage]
})
export class ContacsPageModule {}
