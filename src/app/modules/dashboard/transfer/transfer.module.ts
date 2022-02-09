import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { transferRoutes } from './transfer.routing';
import { TransferComponent } from './index/transfer.component';


@NgModule({
  declarations: [TransferComponent],
  imports: [RouterModule.forChild(transferRoutes)],
  exports: [TransferComponent],
})
export class TransferModule {}
