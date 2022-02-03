import { IUserAuth } from "../interfaces/IUserAuth";

export interface IAuthRepository {

    Authentication(userAuth: IUserAuth): number;

}