import { accountType } from "../domain/enum/accountType.enum";
import { IUserData } from "../domain/interfaces/IUserData";

export const usersData: IUserData[] = [
  {
    id: 0,
    username: 'user',
    password: 'test',
    firstName: 'User',
    lastName: 'Test',
    bankInformation: {
      accountNumber: 532143,
      balance: 12000,
      accountType: accountType.SAVING,
      transactions: [],
    },
    friends: [],
  },
  {
    id: 1,
    username: 'david',
    password: '1234',
    firstName: 'David',
    lastName: 'De La Hoz',
    bankInformation: {
      accountNumber: 596865,
      balance: 57000,
      accountType: accountType.SAVING,
      transactions: [],
    },
    friends: [],
  },
];
