import { Inject, Injectable } from "@angular/core";
import { storageKey } from "../domain/enum/storageKey.enum";
import { IUserData } from "../domain/interfaces/IUserData";
import { IDataRepository } from "../domain/repository/IData.repository";
import { IStorageRepository } from "../domain/repository/IStorage.repository";

@Injectable()
export class DataService implements IDataRepository {

    constructor(@Inject('storageRepository') private storageService: IStorageRepository){ }

    update(userData: IUserData): void {
        const usersData = this.storageService.getAll(storageKey.USERS_INFORMATION);

        usersData.find((user, index) => {
            if (user.id == userData.id) {
                usersData[index] = userData;
                this.storageService.save(storageKey.USERS_INFORMATION, usersData);
            }
        })
    }

    save(userData: IUserData): void {
        const usersData = this.storageService.getAll(storageKey.USERS_INFORMATION);
        usersData.push(userData);
        this.storageService.save(storageKey.USERS_INFORMATION, usersData);
    }
}