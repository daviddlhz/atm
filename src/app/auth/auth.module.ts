import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { authRoutes } from './auth.routing';
import { FormsModule } from '@angular/forms';
import { AuthProvider } from '../core/domain/providers/auth.provider';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(authRoutes),
    FormsModule
  ],
  providers: [AuthProvider]
})
export class AuthModule { }
