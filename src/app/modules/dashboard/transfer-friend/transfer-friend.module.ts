import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { transferFriendRoutes } from '../../modules.routing';
import { TransferFriendComponent } from './index/transfer-friend.component';


@NgModule({
  declarations: [TransferFriendComponent],
  imports: [RouterModule.forChild(transferFriendRoutes)],
  exports: [TransferFriendComponent],
})
export class TransferFriendModule {}
