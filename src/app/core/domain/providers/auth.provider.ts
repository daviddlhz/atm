import { Provider } from "@angular/core";
import { AuthServices } from "../../services/auth.services";

export const AuthProvider: Provider = {
    provide: 'authRepository',
    useClass: AuthServices
}