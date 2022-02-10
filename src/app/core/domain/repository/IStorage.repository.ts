import { IUserData } from "../interfaces/IUserData";

export interface IStorageRepository {
  save(userData: IUserData): void;
  getValue(key: string): IUserData;
  delete(key: string): void;
}