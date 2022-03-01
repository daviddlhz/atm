import { Inject, Injectable } from "@angular/core";
import { storageKey } from "../domain/enum/storageKey.enum";
import { IUserData } from "../domain/interfaces/IUserData";
import { IStorageRepository } from "../domain/repository/IStorage.repository";

@Injectable()
export class transferFriendService {
    
    constructor(
        @Inject('storageRepository') private storageService: IStorageRepository
    ) { }
    
    /*
    getFriends(): IUserData[] {
        const currentUser = this.storageService.getValue(storageKey.USER_DATA);
        const usersData = this.storageService.getAll(storageKey.USERS_INFORMATION);

           return currentUser.friends.map(userId => {
               usersData.filter(user => userId == user.id);
            })
        
    }
    */
}