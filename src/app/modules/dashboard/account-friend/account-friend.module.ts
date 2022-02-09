import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { accountFriendRoutes } from './account-friend.routing';
import { AccountFriendComponent } from './index/account-friend.component';


@NgModule({
  declarations: [AccountFriendComponent],
  imports: [RouterModule.forChild(accountFriendRoutes)],
  exports: [AccountFriendComponent]
})

export class AccountFriendModule { }
