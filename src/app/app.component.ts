import { Component, OnInit, Inject } from '@angular/core';
import { storageKey } from './core/domain/enum/storageKey.enum';
import { IStorageRepository } from './core/domain/repository/IStorage.repository';
import { usersData } from './core/helpers/fake-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'atm';

  constructor(@Inject('storageRepository') private storageService: IStorageRepository) {}

  ngOnInit(): void {
    this.storageService.save(storageKey.USERS_INFORMATION, usersData);
  }
}
