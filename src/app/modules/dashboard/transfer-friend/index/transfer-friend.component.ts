import { Component, Inject } from '@angular/core';
import { typeTransaction } from 'src/app/core/domain/enum/typeTransaction.enum';
import { ITransaction } from 'src/app/core/domain/interfaces/ITransaction';
import { ITransferRepository } from 'src/app/core/domain/repository/ITransfer.repository';

@Component({
  selector: 'transfer-friend-component',
  templateUrl: './transfer-friend.component.html',
  styleUrls: ['./transfer-friend.component.scss']
})
export class TransferFriendComponent {

  transferTo = 0;
  amount = 0;
  description = '';

  constructor(@Inject('transferRepository') private transferService: ITransferRepository) { }

  transfer(): void {

    const transaction: ITransaction = {
      typeTransaction: typeTransaction.TRANSFER,
      amount: this.amount, 
      date: new Date, 
      transferTo: this.transferTo, 
      description: this.description
    } 
    
    this.transferService.send(transaction);
  }

}
