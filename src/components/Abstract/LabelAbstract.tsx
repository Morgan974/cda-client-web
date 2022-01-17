import React from "react";

interface Props {
    className?: string;
    label: string;
}

const LabelAbstract: React.ComponentType<Props> = ({
    className,
    label
}) => {

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <div className={"label " + className}>
            {label}
        </div>
    )
};

export default LabelAbstract;