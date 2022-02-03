import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { dashboardRoutes } from '../modules.routing';
import { HomeComponent } from './home/home.component';


@NgModule({

  declarations: [
    HomeComponent
  ],

  imports: [
    RouterModule.forChild(dashboardRoutes)
  ]

})

export class DashboardModule { }
