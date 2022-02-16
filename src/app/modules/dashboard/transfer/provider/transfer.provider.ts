import { Provider } from "@angular/core";
import { TransferService } from "../services/transfer.service";

export const TransferProvider: Provider = {
    provide: 'transferRepository',
    useClass: TransferService
}