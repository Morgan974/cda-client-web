import React, {ReactElement} from "react";
import { Link } from "react-router-dom";

interface Props {
    className?: string;
    nameMenu: ReactElement;
    path: string;
}

const BtnMenueElement: React.ComponentType<Props> = (
    {
        className,
        nameMenu,
        path
    }) => {

    return (
            <button className={"btn " + (className?className:'')}>
                <Link to={path}>{nameMenu}</Link>
                <div className="col-md-12 block" />
            </button>
    );
}

export default BtnMenueElement;