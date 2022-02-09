import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { balanceRoutes } from './balance.routing';
import { BalanceComponent } from './index/balance.component';

@NgModule({
  declarations: [BalanceComponent],
  imports: [RouterModule.forChild(balanceRoutes)],
  exports: [BalanceComponent],
})
export class BalanceModule {}
