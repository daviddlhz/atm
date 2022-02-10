import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServices } from './auth.services';
import { StorageService } from './storage.services';



@NgModule({
  
  declarations: [],
  
  imports: [
    CommonModule
  ],

  providers: [
    AuthServices,
    StorageService
  ]
  
})
export class ServicesModule { }
