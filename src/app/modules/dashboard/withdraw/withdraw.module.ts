import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { withdrawRoutes } from './withdraw.routing';
import { WithdrawComponent } from './index/withdraw.component';
import { WithdrawProvider } from 'src/app/core/domain/providers/withdraw.provider';
import { FormsModule } from '@angular/forms';
import { DataProvider } from 'src/app/core/domain/providers/data.provider';
import { StorageProvider } from 'src/app/core/domain/providers/storage.provider';


@NgModule({
  declarations: [WithdrawComponent],
  imports: [FormsModule, RouterModule.forChild(withdrawRoutes)],
  exports: [WithdrawComponent],
  providers: [
    WithdrawProvider, 
    DataProvider,
    StorageProvider
  ],
})
export class WithdrawModule {}
