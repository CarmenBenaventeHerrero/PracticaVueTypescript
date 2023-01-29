//Composable para el Login - autentificación
import { Credentials } from "@/models/credentials";
import { computed } from "vue";
import { useStore } from "vuex";

const useAuthLogin = () => {
    const store = useStore(); //me facilita acceder a las variables state
    return {
        //GETTERS: para poder acceder al valor de las variables, devuelve el valor del state en cada uno de los getters.
        token: computed(()=> store.getters['auth/getToken']),
        authLogin: computed(()=> store.getters['auth/getAuthLogin']),
        isLoading: computed(()=> store.getters['auth/getIsLoading']),
        
        //ACTIONS: nos permite hacer llamadas asíncronas, y volcar la respuesta de data en la variable state
        fetchToken: (data: Credentials) => store.dispatch('auth/fetchToken', data),
        fetchAuthLogin: () => store.dispatch('auth/fetchAuthLogin'),
        deleteToken: () => store.dispatch('auth/deleteToken'),
    }
};

export default useAuthLogin;