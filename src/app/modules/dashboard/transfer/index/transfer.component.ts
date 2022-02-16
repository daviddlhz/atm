import { Component, Inject } from '@angular/core';
import { ITransaction } from 'src/app/core/domain/interfaces/ITransaction';
import { ITransferRepository } from '../repository/ITransfer.repository';

@Component({
  selector: 'app-transfer',
  templateUrl: './transfer.component.html',
  styleUrls: ['./transfer.component.scss']
})
export class TransferComponent {

  transferTo = 0;
  amount = 0;
  description = '';

  constructor(@Inject('transferRepository') private transferService: ITransferRepository) { }

  transfer(): void {

    const transaction: ITransaction = {
      amount: this.amount, 
      date: new Date, 
      transferTo: this.transferTo, 
      description: this.description
    } 

    this.transferService.send(transaction);
  }
}
