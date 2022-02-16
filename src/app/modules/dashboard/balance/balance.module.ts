import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';
import { balanceRoutes } from './balance.routing';
import { BalanceComponent } from './index/balance.component';

@NgModule({
  declarations: [BalanceComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(balanceRoutes)
  ],
  exports: [BalanceComponent],
  providers: [StorageProvider]
})
export class BalanceModule {}
