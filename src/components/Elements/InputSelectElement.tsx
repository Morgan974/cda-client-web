import React from "react";
import SelectAbstract from "../Abstract/SelectAbstract";
import LabelAbstract from "../Abstract/LabelAbstract";

interface Props {
    element : any;
    setElement : any;
    label?: string;
    classNameLabel?: string;
}

const InputSelectElement: React.ComponentType<Props> = ({
    element,
    setElement,
    label,
    classNameLabel
}) => {

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <>
            {label &&
                <LabelAbstract
                    label={label}
                    className={classNameLabel}
                />
            }
            <SelectAbstract
                element={element}
                setElement={setElement}
            />
        </>
    )
};

export default InputSelectElement;