import { Injectable } from '@angular/core';

import { IAuthRepository } from '../domain/repository/IAuth.repository';
import { IUserAuth } from '../domain/interfaces/IUserAuth';
import { usersData } from '../helpers/fake-data';
import { IUserData } from '../domain/interfaces/IUserData';

@Injectable()
export class AuthServices implements IAuthRepository {

    Authenticate(userAuth: IUserAuth): IUserData | undefined {
        return usersData.find( data => data.username == userAuth.username && data.password == userAuth.password );
    }
}
