import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';
import { accountRoutes } from './account.routing';
import { AccountComponent } from './index/account.component';
import { BankInformationComponent } from './components/bank-information/bank-information.component';
import { TransactionComponent } from './components/transaction/transaction.component';


@NgModule({
  declarations: [AccountComponent, BankInformationComponent, TransactionComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes)
  ],
  exports: [AccountComponent],
  providers: [StorageProvider]
})

export class AccountModule { }
