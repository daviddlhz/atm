import { Component, Inject } from '@angular/core';
import { typeTransaction } from 'src/app/core/domain/enum/typeTransaction.enum';
import { ITransaction } from 'src/app/core/domain/interfaces/ITransaction';
import { IWithdrawRepository } from 'src/app/core/domain/repository/IWithdraw.repository';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.scss']
})
export class WithdrawComponent {

  amount: number = 0;

  constructor(@Inject('withdrawRepository') private withdrawService: IWithdrawRepository) { }


  cashout(): void {
    
    const transaction: ITransaction = {
      amount: this.amount,
      transferTo: 0,
      typeTransaction: typeTransaction.WITHDRAW,
      date: new Date(),
    };
    
    this.withdrawService.withdraw(transaction);
  }

}
