import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './login/login.component';
import { authRoutes } from './auth.routing';
import { AuthProvider } from '../core/domain/providers/auth.provider';
import { StorageProvider } from '../core/domain/providers/storage.provider';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    ReactiveFormsModule,
    RouterModule.forChild(authRoutes)
  ],
  providers: [
    AuthProvider,
    StorageProvider
  ]
})

export class AuthModule { }
