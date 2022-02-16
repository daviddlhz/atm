import { ITransaction } from "src/app/core/domain/interfaces/ITransaction";
import { IUserData } from "src/app/core/domain/interfaces/IUserData";

export interface ITransferRepository {
  send(transaction: ITransaction): boolean;
  validateTransaction(accountNumber: number): IUserData | undefined;
  validateBalance(balance: number, amount: number): boolean;
}