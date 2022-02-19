import { Component, Inject, OnInit } from '@angular/core';
import { storageKey } from 'src/app/core/domain/enum/storageKey.enum';
import { ITransaction } from 'src/app/core/domain/interfaces/ITransaction';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IStorageRepository } from 'src/app/core/domain/repository/IStorage.repository';

@Component({
  selector: 'transaction-component',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.scss']
})
export class TransactionComponent {

  userData: IUserData = this.storageService.getValue(storageKey.USER_DATA);
  transactions: ITransaction[] = this.userData.bankInformation.transactions;

  constructor(@Inject('storageRepository') private storageService: IStorageRepository) { }

  isEmpty(transactions: ITransaction[]): boolean {
    return transactions.length == 0 ? true : false;
  }
}
