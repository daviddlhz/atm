import { Component, Inject, OnInit } from '@angular/core';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IAccountFriendRepository } from 'src/app/core/domain/repository/IAccountFriend.repository';
import { generateId } from 'src/app/core/helpers/identification-generator';

@Component({
  selector: 'account-friend-component',
  templateUrl: './account-friend.component.html',
  styleUrls: ['./account-friend.component.scss']
})
export class AccountFriendComponent {

  firstName: string = '';
  lastName: string = '';
  userName: string = '';
  password: string = '';
  accountType: string = '';
  balance: number = 0;

  constructor(@Inject('accountFriendRepository') private accountFriendService: IAccountFriendRepository) { }

  create(): void {

    const userData: IUserData = {
      id: generateId(),
      firstName: this.firstName,
      lastName: this.lastName,
      username: this.userName,
      password: this.password,
      bankInformation: {
        accountNumber: generateId(),
        balance: this.balance,
        accountType: this.accountType,
        transactions: []
      },
      friends: []
    }

    this.accountFriendService.crate(userData);
  }
}
