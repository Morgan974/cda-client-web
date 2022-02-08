import React from "react";
import BadgeLevelElement from "../Elements/BadgeElement";

interface Props {
    trek : any;
}

const TrekInformationFeature: React.ComponentType<Props> = ({
   trek,
}) => {

    /*******************************************************************************************************************
     *                                          State
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <div className="center-element">
            <div className="block-search w-50 m-4">
                <div className="row col-md-12 color-black fw-bold">
                    <div className="col-md-3 center-element">
                        <div className="first-letter-capitalize">{trek.name}</div>
                    </div>
                    <div className="col-md-3 center-element">
                        <BadgeLevelElement
                            level={trek.level}
                        />
                    </div>
                    <div className="col-md-3 center-element">{trek.duration} h</div>
                    <div className="col-md-3 center-element">{trek.price} €</div>
                </div>
            </div>
        </div>
    )
};

export default TrekInformationFeature;