import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const mainRoutes: Routes = [
  { path: '', loadChildren: ()=> import('./auth/auth.module').then(m => m.AuthModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(mainRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
