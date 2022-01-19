import React, {useCallback} from "react";

interface Props {
    label : string;
    setElement : any;
}

const InputFeature: React.ComponentType<Props> = ({
    label,
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
            <div className="input-group-prepend">
                <span className="input-group-text" id="inputGroup-sizing-default">
                    {label}
                </span>
            </div>
            <input type="text" className="form-control" aria-label="Default"
                   aria-describedby="inputGroup-sizing-default" onChange={handleChange} />
        </div>
    );
}

export default InputFeature;