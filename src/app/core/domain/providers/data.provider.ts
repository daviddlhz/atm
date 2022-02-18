import { Provider } from "@angular/core";
import { DataService } from "../../services/data.service";

export const DataProvider: Provider = {
    provide: 'dataRepository',
    useClass: DataService
}