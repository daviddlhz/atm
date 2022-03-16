import { Component, Inject } from "@angular/core";
import { storageKey } from "src/app/core/domain/enum/storageKey.enum";
import { IUserData } from "src/app/core/domain/interfaces/IUserData";
import { IFriendRepository } from "src/app/core/domain/repository/IFriend.repository";
import { IStorageRepository } from "src/app/core/domain/repository/IStorage.repository";

@Component({
  selector: 'friend-component',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.scss'],
})
export class FriendComponent {
  currentUser: IUserData = this.storageService.getValue(storageKey.USER_DATA);
  friends: IUserData[] = this.friendService.getFriends();

  constructor(
    @Inject('storageRepository') private storageService: IStorageRepository,
    @Inject('friendRepository') private friendService: IFriendRepository
  ) {}

  isEmpty(friends: number[]): boolean {
    return friends.length == 0 ? true : false;
  }
}