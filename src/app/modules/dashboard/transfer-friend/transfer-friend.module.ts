import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { transferFriendRoutes } from './transfer-friend.routing';
import { TransferFriendComponent } from './index/transfer-friend.component';
import { FormsModule } from '@angular/forms';
import { TransferProvider } from 'src/app/core/domain/providers/transfer.provider';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';
import { DataProvider } from 'src/app/core/domain/providers/data.provider';


@NgModule({
  
  declarations: [TransferFriendComponent],
  
  imports: [
    FormsModule,
    RouterModule.forChild(transferFriendRoutes)
  ],
  
  exports: [TransferFriendComponent],

  providers: [
    TransferProvider,
    StorageProvider,
    DataProvider
  ]

})
export class TransferFriendModule {}
