import { Provider } from "@angular/core";
import { AccountFriendService } from "../../services/account-friend.service";

export const AccountFriendProvider: Provider = {
    provide: 'accountFriendRepository',
    useClass: AccountFriendService
}