import { Inject, Injectable } from '@angular/core';
import { IUserData } from '../domain/interfaces/IUserData';
import { IAccountFriendRepository } from '../domain/repository/IAccountFriend.repository';
import { IDataRepository } from '../domain/repository/IData.repository';
import { IStorageRepository } from '../domain/repository/IStorage.repository';
import { storageKey } from '../domain/enum/storageKey.enum';

@Injectable()
export class AccountFriendService implements IAccountFriendRepository {

  constructor(
    @Inject('storageRepository') private storageService: IStorageRepository,
    @Inject('dataRepository') private dataService: IDataRepository) { }

  crate(userData: IUserData): void {
    if(!this.validateUsername(userData.username)) {
        const currentUser = this.storageService.getValue(storageKey.USER_DATA);

        userData.friends.push(currentUser.id);
        currentUser.friends.push(userData.id);

        this.dataService.update(currentUser);
        this.dataService.update(userData);

        this.storageService.save(storageKey.USER_DATA, currentUser);
        this.dataService.save(userData);

        alert('Account created!');
    }
    else {
        alert('Username exists');
    }
  }

  validateUsername(username: string): boolean {
    const usersData = this.storageService.getAll(storageKey.USERS_INFORMATION);
    return usersData.some( user => user.username == username);
  }
}
