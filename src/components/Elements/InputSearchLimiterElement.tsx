import React, {useCallback} from "react";
import LabelAbstract from "../Abstract/LabelAbstract";

interface Props {
    keyName: string;
    label? : string;
    element?: any;
    setElement : any;
    placeholder? : string;
}

const InputSearchLimiterElement: React.ComponentType<Props> = ({
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

    const handleChange = useCallback((e:any) => {
        const value = e.target.value;

        if (value.length > 2) {
            setElement(e.target.value)
        } if (value.length < 3) {
            setElement(undefined);
        }

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
                type="text"
                className="form-control w-100"
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                placeholder={placeholder ? placeholder : undefined}
                value={element}
                onChange={handleChange}
            />
        </div>
    );
}

export default InputSearchLimiterElement;