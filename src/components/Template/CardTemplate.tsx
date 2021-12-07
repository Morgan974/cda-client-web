import React from "react";

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
                <div className="card-block-header row">
                    {parameters.level}
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
                    <button className="btn btn-view">
                        Detail
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CardTemplate;