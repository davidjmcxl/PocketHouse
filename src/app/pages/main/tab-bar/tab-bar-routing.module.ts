import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabBarPage } from './tab-bar.page';
import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';

const routes: Routes = [
  {
    path: '',
    component: TabBarPage,
    children: [
      {
        path: 'home',component:HomeComponent
      },
      {
        path: 'account',component:AccountComponent
      }],
  },
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabBarPageRoutingModule {}
