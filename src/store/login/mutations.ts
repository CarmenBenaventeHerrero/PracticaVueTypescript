import { AuthLogin } from "@/models/authLogin";
import { Token } from '@/models/token';
import { MutationTree } from 'vuex';
import { ILoginState } from './state';

const mutations: MutationTree<ILoginState> = {
    //Mutaciones para volcar datos y guardarlos:
    //Mutación para añadir el token recibido al state
    setToken(state: ILoginState, token: Token) {
        state.token = token;
    },
    //Mutación para añadir el usuario autorizado al state
    setAuthLogin(state: ILoginState, authUser: AuthLogin) {
        state.authLogin = authUser;
    },
    //Mutación que será true mientras se procesa la petición
    setIsLoading(state: ILoginState, value: boolean){
        state.authLoading = value;
    },

    //Mutación para eliminar el token recibido al state
    deleteToken(state: ILoginState) {
        state.token = null;
    },
    
    }

export default mutations;