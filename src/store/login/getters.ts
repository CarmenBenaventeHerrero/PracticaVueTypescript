import { GetterTree } from "vuex";
import { IState } from "../index";
import { ILoginState } from "./state";

const getters: GetterTree<ILoginState, IState> = {
    //Definimos los getters del store del login para obtener el state de una manera reactiva

    getToken(state) {
        return state.token;
    },

    getAuthLogin(state) {
        return state.authLogin;
    },

    getIsLoading(state) {
        return state.authLoading;
    },

}

export default getters;