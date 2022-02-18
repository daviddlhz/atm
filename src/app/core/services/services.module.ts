import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthServices } from './auth.service';
import { StorageService } from './storage.service';



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
