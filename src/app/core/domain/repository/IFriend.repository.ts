import { IUserData } from "../interfaces/IUserData";

export interface IFriendRepository {
    getFriends(): IUserData[];
}