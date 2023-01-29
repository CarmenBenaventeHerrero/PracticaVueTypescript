import { ActionTree } from "vuex";
import { ILoginState } from "./state";
import { IState } from "..";
import { Credentials } from "@/models/credentials";
import fakeShopApi from "@/api/fakeShopApi";
import { AxiosResponse } from "axios";
import router from "@/router";
import { AuthLogin } from "@/models/authLogin";


const actions: ActionTree<ILoginState, IState> = {

    //Objetivo: hacer una petición de tipo post para que el usuario a través de unas credenciales, la API te devuelva el token o no
   async fetchToken({ commit }, body: Credentials){
    //Obtiene la data
        try {
            const { data } = await fakeShopApi.post("/auth/login", body);
            commit("setToken", data);
             //Usamos la mutación setToken para modificar el state del token que recibimos y lo guardamos. 
            localStorage.setItem('token', data.access_token);
            router.push({name: 'home'});

    }   catch(error: any){
            console.error(error.message)
            alert('Status 401: You do not have permissions to access')
    }
   },

   //Objetivo: obtener información del perfil del usuario ya autorizado
   async fetchAuthLogin({commit}){
        commit('setIsLoading', true);
        const {data} = await fakeShopApi.get<unknown, AxiosResponse<AuthLogin>>('/auth/profile');
        commit('setIsLoading', false);
        commit('setAuthLogin', data);
},

    //usamos la mutación para actualizar el estado eliminando el token del localStorage y redirigir al login
    deleteToken ({commit}){
        commit('deleteToken');
        localStorage.removeItem('token');
        router.push({name: 'login'});

    }
}

export default actions;
