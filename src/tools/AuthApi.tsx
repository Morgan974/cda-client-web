import axios from "axios";
import {AddressApi} from "../config/CommonConst";
import jwtDecode from "jwt-decode";
import {toast} from "react-toastify";

function setAxiosToken (token : string) {
    axios.defaults.headers.common['Authorization'] = "Bearer " + token;
}

function setup() {
    const token = window.localStorage.getItem("authToken");

    if(token) {
        const {exp : expiration} : any = jwtDecode(token);

        if((expiration * 1000) > new Date().getTime()) {
            setAxiosToken(token);
            console.log("Connexion établie avec axios !")
        } else {
            logout();
        }
    } else {
        logout();
    }
}

function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers.common['Authorization'];
    toast.info("Vous êtes désormais déconnecté !");
}

function authenticate(credentials : any, setError : Function, setIsAuthenticated : Function) {
    axios
        .post(AddressApi + "/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            window.localStorage.setItem("authToken", token);
            setAxiosToken(token);
            setError('');
            setIsAuthenticated(true);
            window.location.href = '/';
            toast.success("Vous êtes désormais connecté !");
            return true;
        })
        .catch(error => setError("Aucun compte ne possède cette adresse email ou les informations ne correspondent pas !"))
    ;
}

function register(data : any, setEmailExist : Function) {
    axios
        .post(AddressApi + "/api/users", data)
        .then(response => console.log(response.data))
        .catch(error => {
            console.log(error.response.status == 422);
            setEmailExist(true);
        })
    ;
}

function isAuthenticated() {
    const token = window.localStorage.getItem("authToken");

    if(token) {
        const {exp : expiration} : any = jwtDecode(token);

        if((expiration * 1000) > new Date().getTime()) {
            return true
        }

        return false;
    }
    return false;
}

function isAdmin() {
    const token = window.localStorage.getItem("authToken");

    if(token) {
        const {roles}: any = jwtDecode(token);
        console.log(roles);

        const roleAdmin = roles.find((element : any) => element === "ROLE_ADMIN");

        return roleAdmin === "ROLE_ADMIN";
    }
}

export default {authenticate, logout, setup, isAuthenticated, isAdmin, register};