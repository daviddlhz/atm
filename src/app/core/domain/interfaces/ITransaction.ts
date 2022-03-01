import { typeTransaction } from "../enum/typeTransaction.enum"

export interface ITransaction {
    id?: string,
    typeTransaction: typeTransaction,
    amount: number,
    transferTo: number,
    date: Date,
    description?: string
}