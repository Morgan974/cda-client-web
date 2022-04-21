import React from "react";
import BadgeLevelElement from "../Elements/BadgeElement";
import BtnMenueElement from "../Elements/BtnMenuelement";
import PriceElement from "../Elements/PriceElement";
import EditTrekFeature from "../Feature/EditTrekFeature";
import ViewHourlyAbstract from "../Abstract/ViewHourlyAbstract";
import DeleteTrekFeature from "../Feature/DeleteTrekFeature";

interface Props {
    className?: string;
    classNameChildren?: string;
    parameters: any;
    setLoadData: (loadData : boolean) => void;
    isAdmin?: boolean;
}

const CardTemplate: React.ComponentType<Props> = (
    {
        className,
        classNameChildren,
        parameters,
        setLoadData,
        isAdmin= false
    }) => {

    return (
        <div className={className}>
            <div className={"card m-2 mb-3 position-relative h-100 " + classNameChildren}>
                <div className="card-block-header">
                    <BadgeLevelElement
                        level={parameters.level}
                        className="badge-position-card badge"
                    />
                    <PriceElement
                        price={parameters.price}
                        className="position-absolute card-price"
                    />
                </div>
                <div className="card-block-body row h-100">
                    <div className="col-md-12 text-center title-card first-letter-capitalize fs-28px pb-2">
                        {parameters.name}
                    </div>
                    <div className="col-md-12 text-center color-black fs-24px pb-4">
                        {parameters.distance} km - <ViewHourlyAbstract hours={parameters.duration} />
                    </div>
                    <div className="col-md-12 pb-3">
                        {parameters.description}
                    </div>
                </div>
                <div className="card-block-footer row">
                    <BtnMenueElement
                        className="btn-view border-bottom"
                        nameMenu={
                            <>
                                <i className="fas fa-eye" /> Détail
                            </>}
                        path={"/trek/" + parameters.id}
                    />
                    {isAdmin &&
                        <div className="row m-0 p-0">
                            <div className="col m-0 p-0">
                                <EditTrekFeature
                                    setLoadData={setLoadData}
                                    idTrek={parameters.id}
                                    parameters={parameters}
                                />
                            </div>
                            <div className="col m-0 p-0">
                                <DeleteTrekFeature
                                    trek={parameters}
                                    setLoadData={setLoadData}
                                    idTrek={parameters.id}
                                    parameters={parameters}
                                />
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export default CardTemplate;