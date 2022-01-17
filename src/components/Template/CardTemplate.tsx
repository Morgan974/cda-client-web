import React from "react";
import BadgeLevelElement from "../Elements/BadgeElement";
import BtnMenueElement from "../Elements/BtnMenuelement";
import PriceElement from "../Elements/PriceElement";

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
            <div className={"card m-2 mb-3 position-relative " + classNameChildren}>
                <div className="card-block-header">
                    <BadgeLevelElement
                        text={parameters.level}
                    />
                    <PriceElement
                        price={parameters.price}
                        className="position-absolute card-price"
                    />
                </div>
                <div className="card-block-body row">
                    <div className="col-md-12 text-center title-card first-letter-capitalize pb-4">
                        {parameters.name}
                    </div>
                    <div className="col-md-12 pb-3">
                        {parameters.description}
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