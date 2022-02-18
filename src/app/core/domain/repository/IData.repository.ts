import { IUserData } from "../interfaces/IUserData";

export interface IDataRepository {
    update(userData: IUserData): void;
}