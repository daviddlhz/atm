import { Routes } from "@angular/router";

//DASHBOARD MODULE
import { TransferComponent } from "./dashboard/transfer/index/transfer.component";
import { AccountComponent } from "./dashboard/account/index/account.component";
import { BalanceComponent } from "./dashboard/balance/index/balance.component";
import { AccountFriendComponent } from "./dashboard/account-friend/index/account-friend.component";
import { TransferFriendComponent } from "./dashboard/transfer-friend/index/transfer-friend.component";
import { WithdrawComponent } from "./dashboard/withdraw/index/withdraw.component";


//ERROR MODULE
import { NotFoundComponent } from "./error/not-found/not-found.component";
export const errorRoutes: Routes = [
    { path: '', component: NotFoundComponent }
]

export const accountRoutes: Routes = [
    { path: 'account', component: AccountComponent },
];

export const balanceRoutes: Routes = [
    { path: 'balance', component: BalanceComponent },
];

export const transferRoutes: Routes = [
    { path: 'transfer', component: TransferComponent },  
];

export const accountFriendRoutes: Routes = [
    { path: 'account-friend', component: AccountFriendComponent },
]

export const transferFriendRoutes: Routes = [
    { path: 'transfer-friend', component: TransferFriendComponent },
]

export const withdrawRoutes: Routes = [
    { path: 'withdraw', component: WithdrawComponent }
]