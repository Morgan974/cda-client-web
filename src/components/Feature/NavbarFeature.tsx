import UserMenuFeature from "./UserMenuFeature";
import BtnMenueElement from "../Elements/BtnMenuelement";
import React from "react";
import AuthApi from "../../tools/AuthApi";

interface Props {
    isAuthenticated : boolean;
    setIsAuthenticated : (isAuthenticated : boolean) => void;
}

const NavbarFeature: React.ComponentType<Props> = ({
    isAuthenticated,
    setIsAuthenticated
}) => {

    const nameMenu : string = "Liste des randonnées";
    const nameMenu2 : string = "Dashboard";

    const isAdmin = AuthApi.isAdmin();

    return (
        <div className='navbar row'>
            <div className="col-md-8">
                <BtnMenueElement
                    className="col-md-2"
                    nameMenu={<>{nameMenu}</>}
                    path={"/"}
                />
                {isAdmin &&
                    <BtnMenueElement
                        className="col-md-2"
                        nameMenu={<>{nameMenu2}</>}
                        path={"/admin/list-trek"}
                    />
                }
            </div>
            <div className="col-md-4 d-flex justify-content-end">
                <UserMenuFeature
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
                />
            </div>
        </div>
    );
}

export default NavbarFeature;