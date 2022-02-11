import { Component, Inject, OnInit } from '@angular/core';
import { IBankData } from 'src/app/core/domain/interfaces/IBankData';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IStorageRepository } from 'src/app/core/domain/repository/IStorage.repository';

@Component({
  selector: 'account-component',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
})
export class AccountComponent implements OnInit {

  userData: IUserData = this.storageService.getValue('USER_DATA');
  bankData: IBankData = this.userData.bankInformation;
  balance: number = 0;
  accountNumber: number = 0;
  accountType: string = '';
  
  constructor(@Inject('storageRepository') private storageService: IStorageRepository) { }

  ngOnInit(): void {
    this.balance = this.bankData.balance;
    this.accountNumber = this.bankData.accountNumber;
    this.accountType = this.bankData.accountType;
  }


}
