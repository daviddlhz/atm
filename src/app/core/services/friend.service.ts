import { Inject, Injectable } from "@angular/core";
import { storageKey } from "../domain/enum/storageKey.enum";
import { IUserData } from "../domain/interfaces/IUserData";
import { IStorageRepository } from "../domain/repository/IStorage.repository";
import { IFriendRepository } from "../domain/repository/IFriend.repository";

@Injectable()
export class FriendService implements IFriendRepository{
  constructor(
    @Inject('storageRepository') private storageService: IStorageRepository
  ) {}

  getFriends(): IUserData[] {
    const currentUser: IUserData = this.storageService.getValue(storageKey.USER_DATA);
    const usersData: IUserData[] = this.storageService.getAll(storageKey.USERS_INFORMATION);
    const friendsData: IUserData[] = [];

    currentUser.friends.map((userId) =>
      friendsData.push(Object(usersData.find((user) => userId == user.id)))
    );

    return friendsData;
  }
}