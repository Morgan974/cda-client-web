import React from "react";
import { Link } from "react-router-dom";
interface Props {
    nameMenu: string;
    path: string;
}

const BtnMenueElement: React.ComponentType<Props> = (
    {
        nameMenu,
        path
    }) => {

    return (
            <button className="btn btn-primary col-md-2">
                <Link to={path}>{nameMenu}</Link>
                <div className="col-md-12 block" />
            </button>
    );
}

export default BtnMenueElement;