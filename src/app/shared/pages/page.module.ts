import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopBarComponent } from './top-bar/top-bar.component';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';
import { AuthProvider } from 'src/app/core/domain/providers/auth.provider';



@NgModule({
  declarations: [
    TopBarComponent
  ],
  imports: [
    CommonModule
  ],

  exports: [
    TopBarComponent
  ],

  providers: [
    AuthProvider,
    StorageProvider
  ]
})
export class PageModule { }
