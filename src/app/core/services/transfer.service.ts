import { Inject, Injectable } from '@angular/core';
import { storageKey } from 'src/app/core/domain/enum/storageKey.enum';
import { ITransaction } from 'src/app/core/domain/interfaces/ITransaction';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IDataRepository } from 'src/app/core/domain/repository/IData.repository';
import { IStorageRepository } from 'src/app/core/domain/repository/IStorage.repository';
import { ITransferRepository } from '../domain/repository/ITransfer.repository';

@Injectable()
export class TransferService implements ITransferRepository {
  
  constructor(
    @Inject('storageRepository') private storageService: IStorageRepository,
    @Inject('dataRepository') private dataService: IDataRepository) { }

  send(transaction: ITransaction): boolean {
    
    const currentUser: IUserData = this.storageService.getValue(storageKey.USER_DATA);
    const userToTransfer: IUserData | undefined = this.validateTransaction(transaction.transferTo);

    if (userToTransfer) {

      if (this.validateBalance(userToTransfer.bankInformation.balance, transaction.amount)) {
       
        userToTransfer.bankInformation.balance += transaction.amount;
        currentUser.bankInformation.balance -= transaction.amount;
        currentUser.bankInformation.transactions?.push(transaction);
        
        this.dataService.update(currentUser);
        this.dataService.update(userToTransfer);
        this.storageService.save(storageKey.USER_DATA, currentUser);
      }
      
      return true;
    }
    
    alert('Number account dont exits');
    return false;
  }

  validateTransaction(accountNumber: number): IUserData | undefined {
    const usersData = this.storageService.getAll(storageKey.USERS_INFORMATION);
    return usersData.find((user) => user.bankInformation.accountNumber == accountNumber);
  }

  validateBalance(balance: number, amount: number): boolean {
    if (balance >= amount) {
      alert('Transferencia exitosa');
      return true;
    }

    alert("Dinero insuficiente para la transferencia");
    return false;
  }
}
