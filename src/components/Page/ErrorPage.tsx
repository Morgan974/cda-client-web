import React from "react";
import BtnMenueElement from "../Elements/BtnMenuelement";

const ErrorPage: React.ComponentType = () => {

    return (
        <div className='page-error'>
            <div className="row">
                <div className="col-md-12 text-error text-center">
                    Fichier non trouvé !
                </div>
                <div className="col-md-12 d-flex justify-content-center">
                    <BtnMenueElement
                        className={"btn-error"}
                        nameMenu={"Retour"}
                        path={"/list-trek"}
                    />
                </div>
            </div>
        </div>
    );
}

export default ErrorPage;