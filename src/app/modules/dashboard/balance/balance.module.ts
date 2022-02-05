import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { balanceRoutes } from '../../modules.routing';
import { BalanceComponent } from './index/balance.component';

@NgModule({
  declarations: [BalanceComponent],
  imports: [RouterModule.forChild(balanceRoutes)],
  exports: [BalanceComponent],
})
export class BalanceModule {}
