import { storageKey } from "../enum/storageKey.enum";
import { IUserData } from "../interfaces/IUserData";

export interface IStorageRepository {
  save(key: storageKey, userData: IUserData | IUserData[]): void;
  getValue(key: storageKey): IUserData;
  getAll(key: storageKey): IUserData[];
  delete(key: storageKey): void;
}