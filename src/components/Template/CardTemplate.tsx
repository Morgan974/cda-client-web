import React from "react";
import BadgeLevelElement from "../Elements/BadgeElement";
import BtnMenueElement from "../Elements/BtnMenuelement";

interface Props {
    className?: string;
    classNameChildren?: string;
    parameters: any;
}

const CardTemplate: React.ComponentType<Props> = (
    {
        className,
        classNameChildren,
        parameters
    }) => {

    return (
        <div className={className}>
            <div className={"card m-1 " + classNameChildren}>
                <div className="card-block-header">
                    <BadgeLevelElement
                        text={parameters.level}
                    />
                </div>
                <div className="card-block-body row">
                    <div className="col-md-12 text-center pb-4">
                        {parameters.name}
                    </div>
                    <div className="col-md-12 pb-3">
                        {parameters.description}
                    </div>
                    <div className="col-md-12 text-end">
                        {parameters.price} €
                    </div>
                </div>
                <div className="card-block-footer row">
                    <BtnMenueElement
                        className="btn-view"
                        nameMenu={"Détail"}
                        path={"/trek/" + parameters.id}
                    />
                </div>
            </div>
        </div>
    );
}

export default CardTemplate;