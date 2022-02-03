import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { errorRoutes } from '../modules.routing';

import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    NotFoundComponent
  ],
  imports: [
    RouterModule.forChild(errorRoutes)
  ],
  exports: [
    NotFoundComponent
  ]
})
export class ErrorModule { }
