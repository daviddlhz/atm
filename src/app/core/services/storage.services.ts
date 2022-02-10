import { Injectable } from "@angular/core";
import { IUserData } from "../domain/interfaces/IUserData";
import { IStorageRepository } from "../domain/repository/IStorage.repository";

@Injectable()
export class StorageService implements IStorageRepository {
  save(userData: IUserData): void {
    localStorage.setItem('USER_DATA', JSON.stringify(userData));
  }

  getValue(key: string): IUserData {
    return JSON.parse(localStorage.getItem(key) || '{}');
  }

  delete(key: string): void {
    localStorage.removeItem(key)
  }
  
}