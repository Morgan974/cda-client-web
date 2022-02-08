import React, {useCallback} from "react";

interface Props {
    label : string;
    element?: any;
    setElement : any;
}

const TextareaFeature: React.ComponentType<Props> = ({
    label,
    element,
    setElement
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
        <div className="input-group my-2">
            <div className="input-group-prepend h-100">
                <span className="input-group-text">
                    {label}
                </span>
            </div>
            <textarea className="form-control" aria-label="With textarea" value={element} onChange={handleChange} />
        </div>
    );
}

export default TextareaFeature;