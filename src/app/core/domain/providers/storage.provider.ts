import { Provider } from "@angular/core";
import { StorageService } from "../../services/storage.service";

export const StorageProvider: Provider = {
    provide: 'storageRepository',
    useClass: StorageService
}