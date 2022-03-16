import { Provider } from "@angular/core";
import { FriendService } from "../../services/friend.service";

export const FriendProvider: Provider = {
    provide: 'friendRepository',
    useClass: FriendService
}