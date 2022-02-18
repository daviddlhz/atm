import { Inject, Injectable } from '@angular/core';

import { IAuthRepository } from '../domain/repository/IAuth.repository';
import { IUserAuth } from '../domain/interfaces/IUserAuth';
import { IUserData } from '../domain/interfaces/IUserData';
import { IStorageRepository } from '../domain/repository/IStorage.repository';
import { storageKey } from '../domain/enum/storageKey.enum';

@Injectable()
export class AuthServices implements IAuthRepository {

    constructor(@Inject('storageRepository') private storageService: IStorageRepository) { }

    Authenticate(userAuth: IUserAuth): IUserData | undefined {
        const usersData = this.storageService.getAll(storageKey.USERS_INFORMATION);
        return usersData.find( data => data.username == userAuth.username && data.password == userAuth.password );
    }

    CloseSession(): void {
        this.storageService.delete(storageKey.USER_DATA);
    }
}
