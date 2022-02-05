import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { withdrawRoutes } from '../../modules.routing';
import { WithdrawComponent } from './index/withdraw.component';


@NgModule({
  declarations: [WithdrawComponent],
  imports: [RouterModule.forChild(withdrawRoutes)],
  exports: [WithdrawComponent],
})
export class WithdrawModule {}
