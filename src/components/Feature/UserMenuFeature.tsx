import BtnMenueElement from "../Elements/BtnMenuelement";
import React from "react";
import AuthApi from "../../tools/AuthApi";

function UserMenuFeature() {

    const handleLogout= () => {
        AuthApi.logout();
    };

    return (
        <div className="col-md-12">
            <BtnMenueElement
                className="col-md-4"
                nameMenu={<>S'enregister</>}
                path={"/login"}
            />
            <BtnMenueElement
                className="col-md-4"
                nameMenu={<>Connexion</>}
                path={"/login"}
            />
            <button className={"btn col-md-4"} onClick={handleLogout}>
                Déconnexion
                <div className="col-md-12 block" />
            </button>
        </div>
    );
}

export default UserMenuFeature;