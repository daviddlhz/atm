import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from 'src/app/shared/shared.module';
import { dashboardRoutes } from './dashboard.routing';

import { HomeComponent } from './home/home.component';


@NgModule({

  declarations: [
    HomeComponent
  ],

  imports: [
    SharedModule,
    RouterModule.forChild(dashboardRoutes)
  ]

})

export class DashboardModule { }
