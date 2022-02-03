import { Injectable } from '@angular/core';

import { IAuthRepository } from '../domain/repository/IAuth.repository';
import { IUserAuth } from '../domain/interfaces/IUserAuth';
import { AuthStatus } from '../domain/enum/status.enum';
import { usersAuthData } from '../helpers/fake-data';
import { AuthModule } from 'src/app/auth/auth.module';

@Injectable()
export class AuthServices implements IAuthRepository {

    Authentication(userAuth: IUserAuth): number {

        if ( usersAuthData.find( (data) => data.username == userAuth.username && data.password == userAuth.password )) 
        {

        return AuthStatus.SUCESS;
        
        }

        return AuthStatus.ERROR;
    }   
}
