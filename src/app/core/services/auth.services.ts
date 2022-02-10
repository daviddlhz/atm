import { Inject, Injectable } from '@angular/core';

import { IAuthRepository } from '../domain/repository/IAuth.repository';
import { IUserAuth } from '../domain/interfaces/IUserAuth';
import { usersData } from '../helpers/fake-data';
import { IUserData } from '../domain/interfaces/IUserData';
import { IStorageRepository } from '../domain/repository/IStorage.repository';

@Injectable()
export class AuthServices implements IAuthRepository {

    constructor(@Inject('storageRepository') private storageService: IStorageRepository) { }

    Authenticate(userAuth: IUserAuth): IUserData | undefined {
        return usersData.find( data => data.username == userAuth.username && data.password == userAuth.password );
    }

    CloseSession(): void {
        this.storageService.delete("USER_DATA");
    }
}
