//Definiremos las variables de entrada en una interfaz y las inicializaremos
import { AuthLogin } from "@/models/authLogin";
import { Token } from "@/models/token";

export interface ILoginState {
  token: Token | null;
  authLogin: AuthLogin | null;
  authLoading: boolean
}

function state(): ILoginState {
    return {
        token: null,
        authLogin: null,
        authLoading: false,
    }
}

export default state;