import { Inject, Injectable } from '@angular/core';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { storageKey } from '../domain/enum/storageKey.enum';
import { ITransaction } from '../domain/interfaces/ITransaction';
import { IDataRepository } from '../domain/repository/IData.repository';
import { IStorageRepository } from '../domain/repository/IStorage.repository';
import { IWithdrawRepository } from '../domain/repository/IWithdraw.repository';

@Injectable()
export class WithdrawService implements IWithdrawRepository {

  constructor(
    @Inject('storageRepository') private storageService: IStorageRepository,
    @Inject('dataRepository') private dataService: IDataRepository) {}

  withdraw(transaction: ITransaction): void {

    const currentUser: IUserData = this.storageService.getValue(storageKey.USER_DATA);

    if (this.validateBalance(currentUser.bankInformation.balance, transaction.amount)) {
        
        currentUser.bankInformation.balance -= transaction.amount;
        currentUser.bankInformation.transactions.push(transaction);       
        this.dataService.update(currentUser);
        this.storageService.save(storageKey.USER_DATA, currentUser);
    } 
  }

  validateBalance(balance: number, amount: number): boolean {
     if (balance >= amount) {
       alert('Retiro de dinero exitoso');
       return true;
     }

     alert('Dinero insuficiente para retirar');
     return false;
  }
}
