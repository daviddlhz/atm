import { Provider } from "@angular/core";
import { WithdrawService } from "../../services/withdraw.service";

export const WithdrawProvider: Provider = {
    provide: 'withdrawRepository',
    useClass: WithdrawService
}