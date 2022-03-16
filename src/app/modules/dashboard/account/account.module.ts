import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';
import { accountRoutes } from './account.routing';
import { AccountComponent } from './index/account.component';
import { BankInformationComponent } from './components/bank-information/bank-information.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { FriendComponent } from './components/friend/friend.component';
import { FriendProvider } from 'src/app/core/domain/providers/friend.provider';


@NgModule({
  declarations: [
    AccountComponent, 
    BankInformationComponent, 
    TransactionComponent,
    FriendComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes)
  ],
  exports: [AccountComponent],
  providers: [
    StorageProvider,
    FriendProvider
  ]
})

export class AccountModule { }
