import React from "react";
import LabelAbstract from "../Abstract/LabelAbstract";
import InputAbstract from "../Abstract/InputAbstract";

interface Props {
    keyName: string;
    label? : string;
    element?: any;
    setElement : any;
    placeholder? : string;
}

const InputTextElement: React.ComponentType<Props> = ({
    keyName,
    label,
    element,
    setElement,
    placeholder
}) => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          CALLBACK
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <div key={keyName} className="input-group display-flex flex-column w-100 mb-2">
            {label &&
                <LabelAbstract
                    className='color-grey fs-16px'
                    label={label + ' :'}
                />
            }
            <InputAbstract
                keyName={keyName}
                setElement={setElement}
                element={element}
                placeholder={placeholder}
            />
            <small id={keyName + "-input-alert"} className="d-none alert-danger p-1" />
        </div>
    );
}

export default InputTextElement;