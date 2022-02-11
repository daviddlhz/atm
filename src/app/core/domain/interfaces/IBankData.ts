import { ITransaction } from "./ITransaction";

export interface IBankData {
    accountNumber: number,
    balance: number,
    accountType: string,
    transactions: ITransaction[] | null
}