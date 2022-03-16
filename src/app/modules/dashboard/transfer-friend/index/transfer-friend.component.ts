import { Component, Inject } from '@angular/core';
import { typeTransaction } from 'src/app/core/domain/enum/typeTransaction.enum';
import { ITransaction } from 'src/app/core/domain/interfaces/ITransaction';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { ITransferRepository } from 'src/app/core/domain/repository/ITransfer.repository';
import { IFriendRepository } from 'src/app/core/domain/repository/IFriend.repository';
import { FriendService } from 'src/app/core/services/friend.service';

@Component({
  selector: 'transfer-friend-component',
  templateUrl: './transfer-friend.component.html',
  styleUrls: ['./transfer-friend.component.scss'],
})
export class TransferFriendComponent {
  
  transferTo: number = 0;
  amount: number = 0;
  description: string = '';
  friends: IUserData[] = this.FriendService.getFriends();

  constructor(
    @Inject('transferRepository') private transferService: ITransferRepository,
    @Inject('friendRepository') private FriendService: IFriendRepository
  ) {}

  transfer(): void {
    const transaction: ITransaction = {
      typeTransaction: typeTransaction.TRANSFER,
      amount: this.amount,
      date: new Date(),
      transferTo: this.transferTo,
      description: this.description,
    };

    this.transferService.send(transaction);
  }
}
