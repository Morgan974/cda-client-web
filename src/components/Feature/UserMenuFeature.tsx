import BtnMenueElement from "../Elements/BtnMenuelement";
import React from "react";
import AuthApi from "../../tools/AuthApi";

interface Props {
    isAuthenticated : boolean;
    setIsAuthenticated : (isAuthenticated : boolean) => void;
}

const UserMenuFeature: React.ComponentType<Props> = ({
    isAuthenticated,
    setIsAuthenticated
}) => {
    const handleLogout= () => {
        AuthApi.logout();
        setIsAuthenticated(false);
        window.location.href = '/login';
    };

    return (
        <div className="col-md-12">
            {isAuthenticated ?
                <button className="btn col-md-12" onClick={handleLogout}>
                    Déconnexion
                    <div className="col-md-12 block" />
                </button>
                :
                <>
                    <BtnMenueElement
                        className="col-md-6"
                        nameMenu={<>S'enregister</>}
                        path={"/login"}
                    />
                    <BtnMenueElement
                        className="col-md-6"
                        nameMenu={<>Connexion</>}
                        path={"/login"}
                    />
                </>
            }
        </div>
    );
}

export default UserMenuFeature;