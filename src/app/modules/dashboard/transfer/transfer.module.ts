import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { transferRoutes } from './transfer.routing';
import { TransferComponent } from './index/transfer.component';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';
import { TransferProvider } from './provider/transfer.provider';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [TransferComponent],
  imports: [
    FormsModule,
    RouterModule.forChild(transferRoutes)
  ],
  exports: [TransferComponent],
  providers: [
    StorageProvider,
    TransferProvider
  ]
})
export class TransferModule {}
