import { Component, OnInit, Inject } from '@angular/core';
import { storageKey } from 'src/app/core/domain/enum/storageKey.enum';
import { IUserData } from 'src/app/core/domain/interfaces/IUserData';
import { IStorageRepository } from 'src/app/core/domain/repository/IStorage.repository';

@Component({
  selector: 'balance-component',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.scss']
})
export class BalanceComponent {

  userData: IUserData = this.storageService.getValue(storageKey.USER_DATA);
  balance: number = this.userData.bankInformation.balance;

  constructor(@Inject('storageRepository') private storageService: IStorageRepository) { }

}
