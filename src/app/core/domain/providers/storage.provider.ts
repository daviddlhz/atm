import { Provider } from "@angular/core";
import { StorageService } from "../../services/storage.services";

export const StorageProvider: Provider = {
    provide: 'storageRepository',
    useClass: StorageService
}