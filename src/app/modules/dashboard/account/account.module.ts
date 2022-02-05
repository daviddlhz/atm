import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { accountRoutes } from '../../modules.routing';
import { AccountComponent } from './index/account.component';


@NgModule({
  declarations: [AccountComponent],
  imports: [RouterModule.forChild(accountRoutes)],
  exports: [AccountComponent]
})

export class AccountModule { }
