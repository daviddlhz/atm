import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AccountFriendProvider } from 'src/app/core/domain/providers/account-friend.provider';
import { DataProvider } from 'src/app/core/domain/providers/data.provider';
import { TransferProvider } from 'src/app/core/domain/providers/transfer.provider';
import { accountFriendRoutes } from './account-friend.routing';
import { AccountFriendComponent } from './index/account-friend.component';


@NgModule({
  declarations: [AccountFriendComponent],
  
  imports: [
    FormsModule,
    RouterModule.forChild(accountFriendRoutes)
  ],
  exports: [AccountFriendComponent],

  providers: [
    AccountFriendProvider,
    TransferProvider,
    DataProvider
  ]
})

export class AccountFriendModule { }
