import React, {ReactElement, useEffect, useState} from "react";
import BadgeLevelElement from "../Elements/BadgeLevelElement";
import ViewHourlyAbstract from "../Abstract/ViewHourlyAbstract";

interface Props {
    trek : any;
}

const TrekInformationFeature: React.ComponentType<Props> = ({
   trek
}) => {

    /*******************************************************************************************************************
     *                                          State
     ******************************************************************************************************************/

    const [body, setBody] = useState<ReactElement>(<></>);
    const [loadData, setLoadData] = useState<boolean>(false);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        setLoadData(true);
    }, [])

    useEffect(() => {
        if (loadData) {
            setBody(
                <div className="center-element">
                    <div className="block-search w-100 m-4">
                        <div className="row col-md-12 color-black fw-bold">
                            <div className="col-md-3 center-element">
                                <div className="first-letter-capitalize color-red">
                                    {trek.name}
                                </div>
                            </div>
                            <div className="col-md-3 center-element">
                                <BadgeLevelElement
                                    className={''}
                                    level={trek.level}
                                />
                            </div>
                            <div className="col-md-3 center-element">
                                {trek.distance} km - <ViewHourlyAbstract hours={trek.duration} />
                            </div>
                            <div className="col-md-3 center-element">{trek.price} €</div>
                        </div>
                    </div>
                </div>
            );
        }
    }, [loadData, trek]);

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <>
            {body}
        </>
    )
};

export default TrekInformationFeature;