import axios from "axios";
import {AddressApi} from "../config/CommonConst";


function logout() {
    window.localStorage.removeItem("authToken");
    delete axios.defaults.headers.common['Authorization'];
}

function authenticate(credentials : any, setError : Function) {
    axios
        .post(AddressApi + "/api/login_check", credentials)
        .then(response => response.data.token)
        .then(token => {
            window.localStorage.setItem("authToken", token);
            axios.defaults.headers.common['Authorization'] = "Bearer " + token;
            setError('');
            return true;
        })
        .catch(error => setError("Aucun compte ne possède cette adresse email ou les informations ne correspondent pas !"))
    ;
}

export default {authenticate, logout};