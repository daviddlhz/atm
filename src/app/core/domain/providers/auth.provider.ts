import { Provider } from "@angular/core";
import { AuthServices } from "../../services/auth.service";

export const AuthProvider: Provider = {
    provide: 'authRepository',
    useClass: AuthServices
}