import { Inject, Injectable } from '@angular/core';
import { ITransaction } from 'src/app/core/domain/interfaces/ITransaction';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IStorageRepository } from 'src/app/core/domain/repository/IStorage.repository';
import { usersData } from 'src/app/core/helpers/fake-data';
import { ITransferRepository } from '../repository/ITransfer.repository';

@Injectable()
export class TransferService implements ITransferRepository {
  
  constructor(@Inject('storageRepository') private storageService: IStorageRepository) { }

  send(transaction: ITransaction): boolean {
    
    const currentUser = this.storageService.getValue("USER_DATA");
    const userToTransfer: IUserData | undefined = this.validateTransaction(transaction.transferTo);

    if (userToTransfer) {

      if (this.validateBalance(userToTransfer.bankInformation.balance, transaction.amount)) {
       
        userToTransfer.bankInformation.balance += transaction.amount;
        currentUser.bankInformation.balance -= transaction.amount;
        currentUser.bankInformation.transactions?.push(transaction);
        
        this.storageService.save(currentUser);
      }
      
      return true;
    }
    
    alert('Number account dont exits');
    return false;
  }

  validateTransaction(accountNumber: number): IUserData | undefined {
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
