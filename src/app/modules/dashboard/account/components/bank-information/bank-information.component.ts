import { Component, Inject, OnInit } from '@angular/core';
import { storageKey } from 'src/app/core/domain/enum/storageKey.enum';
import { IBankData } from 'src/app/core/domain/interfaces/IBankData';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IStorageRepository } from 'src/app/core/domain/repository/IStorage.repository';

@Component({
  selector: 'bank-information-component',
  templateUrl: './bank-information.component.html',
  styleUrls: ['./bank-information.component.scss'],
})
export class BankInformationComponent implements OnInit {
  
  //inicializacion de datos go to ngOninit
  userData: IUserData = this.storageService.getValue(storageKey.USER_DATA);
  bankData: IBankData = this.userData.bankInformation;
  balance: number = 0;
  accountNumber: number = 0;
  accountType: string = '';

  constructor(@Inject('storageRepository') private storageService: IStorageRepository) {}

  ngOnInit(): void {
    this.balance = this.bankData.balance;
    this.accountNumber = this.bankData.accountNumber;
    this.accountType = this.bankData.accountType;
  }
}
