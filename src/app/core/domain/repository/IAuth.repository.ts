import { IUserAuth } from "../interfaces/IUserAuth";
import { IUserData } from "../interfaces/IUserData";

export interface IAuthRepository {
  Authenticate(userAuth: IUserAuth): IUserData | undefined;
}