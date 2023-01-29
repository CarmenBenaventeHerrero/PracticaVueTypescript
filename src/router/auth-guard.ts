//Accedemos al token guardado en LocalStorage con el objetivo de si es correcto navegamos, y sino te redirige al login
import { RouteLocation } from "vue-router";

const haveRoleGuard = (to: RouteLocation, from: RouteLocation, next: any) => {
    const userToken = localStorage.getItem('token');
    if(userToken){
        next();
    //Si no, saltará una alerta y se redirigirá al login.
    }else{
        alert(' You need your credentials to enter ');
        next({name: 'login'});
    }
}

export default haveRoleGuard;