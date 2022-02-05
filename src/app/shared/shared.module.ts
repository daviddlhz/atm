import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomModule } from './custom/custom.module';
import { PageModule } from './pages/page.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    CustomModule,
    PageModule
  ]
})
export class SharedModule { }
