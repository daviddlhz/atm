import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { accountFriendRoutes } from '../../modules.routing';
import { AccountFriendComponent } from './index/account-friend.component';


@NgModule({
  declarations: [AccountFriendComponent],
  imports: [RouterModule.forChild(accountFriendRoutes)],
  exports: [AccountFriendComponent]
})

export class AccountFriendModule { }
