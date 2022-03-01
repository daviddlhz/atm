import { ITransaction } from "src/app/core/domain/interfaces/ITransaction";

export interface ITransferRepository {
  send(transaction: ITransaction): boolean;
}