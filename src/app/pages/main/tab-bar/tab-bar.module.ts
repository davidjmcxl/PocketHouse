import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabBarPageRoutingModule } from './tab-bar-routing.module';

import { TabBarPage } from './tab-bar.page';
import { AccountComponent } from '../account/account.component';
import { HomeComponent } from '../home/home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabBarPageRoutingModule
  ],
  declarations: [TabBarPage,AccountComponent,HomeComponent  ]
})
export class TabBarPageModule {}
