import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';
import { accountRoutes } from './account.routing';
import { AccountComponent } from './index/account.component';


@NgModule({
  declarations: [AccountComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(accountRoutes)
  ],
  exports: [AccountComponent],
  providers: [StorageProvider]
})

export class AccountModule { }
