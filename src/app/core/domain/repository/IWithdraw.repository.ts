import { ITransaction } from "../interfaces/ITransaction";

export interface IWithdrawRepository {
  withdraw(transaction: ITransaction): void;
}