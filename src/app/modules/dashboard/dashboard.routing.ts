import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";

export const dashboardRoutes: Routes = [
  {
    path: 'dashboard',
    component: HomeComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./account/account.module').then((m) => m.AccountModule),
      },
      {
        path: '',
        loadChildren: () => import('./balance/balance.module').then((m) => m.BalanceModule),
      },
      {
        path: '',
        loadChildren: () => import('./transfer/transfer.module').then((m) => m.TransferModule),
      },
      {
        path: '',
        loadChildren: () => import('./account-friend/account-friend.module').then((m) => m.AccountFriendModule),
      },
      {
        path: '',
        loadChildren: () => import('./transfer-friend/transfer-friend.module').then((m) => m.TransferFriendModule),
      },
      {
        path: '',
        loadChildren: () => import('./withdraw/withdraw.module').then((m) => m.WithdrawModule),
      },
    ],
  },
];
