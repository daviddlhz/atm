import { IUserData } from "../interfaces/IUserData";

export interface IAccountFriendRepository {
    crate(userData: IUserData): void;
}