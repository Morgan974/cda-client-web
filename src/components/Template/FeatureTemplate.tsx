import React, {ReactElement} from "react";

interface Props {
    className?: string;
    leftComponent?:ReactElement;
    rightComponent:ReactElement[];
    menuElement?: ReactElement;
}

const FeatureTemplate: React.ComponentType<Props> = (
    {
        className,
        leftComponent,
        rightComponent,
        menuElement
    }) => {

    return (
        <div className={"feature-template " + className}>
            <div className="row col-md-11">
                {menuElement &&
                    <div className="my-3 right-element">
                        {menuElement}
                    </div>
                }
                <div className="col-xl-3 col-lg-12">
                    {leftComponent}
                </div>
                <div className="col-xl-9 col-lg-12">
                    {
                        rightComponent.map((element, key) => {
                            return (
                                <div key={key}>
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