import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { transferFriendRoutes } from './transfer-friend.routing';
import { TransferFriendComponent } from './index/transfer-friend.component';
import { TransferProvider } from 'src/app/core/domain/providers/transfer.provider';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';
import { DataProvider } from 'src/app/core/domain/providers/data.provider';
import { FriendProvider } from 'src/app/core/domain/providers/friend.provider';


@NgModule({
  
  declarations: [TransferFriendComponent],
  
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(transferFriendRoutes)
  ],
  
  exports: [TransferFriendComponent],

  providers: [
    FriendProvider,
    TransferProvider,
    StorageProvider,
    DataProvider
  ]

})
export class TransferFriendModule {}
