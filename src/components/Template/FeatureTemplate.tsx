import React, {ReactElement} from "react";

interface Props {
    className?: string;
    leftComponent?:ReactElement;
    rightComponent:ReactElement[];
}

const FeatureTemplate: React.ComponentType<Props> = (
    {
        className,
        leftComponent,
        rightComponent
    }) => {

    return (
        <div className={"feature-template " + className}>
            <div className="row col-md-11">
                <div className="col-md-3">
                    {leftComponent}
                </div>
                <div className="col-md-9">
                    {
                        rightComponent.map((element) => {
                            return (
                                <div>
                                    {element}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    );
}

export default FeatureTemplate;