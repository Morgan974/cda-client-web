import React, {useCallback} from "react";
import LabelAbstract from "../Abstract/LabelAbstract";

interface Props {
    label? : string;
    element?: any;
    setElement : any;
    placeholder? : string;
}

const InputFeature: React.ComponentType<Props> = ({
    label,
    element,
    setElement,
    placeholder
}) => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    const handleChange = useCallback((e:any) => {
        setElement(e.target.value)
    }, [setElement])

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
        <div className="input-group display-flex flex-column w-100 mb-2">
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

export default InputFeature;