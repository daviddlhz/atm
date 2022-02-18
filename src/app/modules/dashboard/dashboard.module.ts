import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';

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
  ],

  providers: [StorageProvider]

})

export class DashboardModule { }
