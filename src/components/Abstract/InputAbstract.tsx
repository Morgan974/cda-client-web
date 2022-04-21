import React, {ChangeEventHandler, useCallback} from "react";
import LabelAbstract from "./LabelAbstract";

interface Props {
    keyName: string;
    label? : string;
    type?: string;
    element?: any;
    setElement : any;
    placeholder? : string;
    functionHandle? : ChangeEventHandler<HTMLInputElement>;
}

const InputAbstract: React.ComponentType<Props> = ({
    keyName,
    label,
    type= "text",
    element,
    setElement,
    placeholder,
    functionHandle
}) => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          CALLBACK
     ******************************************************************************************************************/

    const handleChange = useCallback((e:any) => {
        setElement(e.target.value)
    }, [setElement]);

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
            <input
                id={label + "-input"}
                type={type}
                className="form-control w-100"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder={placeholder ? placeholder : undefined}
                value={element}
                onChange={functionHandle ? functionHandle : handleChange}
            />
            <small id={keyName + "-input-alert"} className="d-none alert-danger p-1" />
        </div>
    );
}

export default InputAbstract;