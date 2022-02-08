import React, {useEffect, useState} from "react";
import SelectAbstract from "../Abstract/SelectAbstract";
import LabelAbstract from "../Abstract/LabelAbstract";
import axios from "axios";

interface Props {
    element : string;
    setElement : (element : string) => void;
    label?: string;
    classNameLabel?: string;
}

const InputSelectLevelFeature: React.ComponentType<Props> = ({
    element,
    setElement,
    label,
    classNameLabel
}) => {

    const [loadData, setLoadData] = useState<boolean>(false);
    const [listElements, setListElements] = useState<[]>([]);

    /*******************************************************************************************************************
     *                                          effect
     ******************************************************************************************************************/

    useEffect(() => {
        setLoadData(true);
    }, [setLoadData]);

    useEffect(() => {
        if(loadData) {
            axios
                .get("http://localhost:1030/api/levels")
                .then(response => {
                    setListElements(response.data);
                });
            setLoadData(false);
        }
    }, [loadData, setLoadData, listElements]);

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
            {listElements &&
                <SelectAbstract
                    element={element}
                    setElement={setElement}
                    listElements={listElements}
                />
            }
        </>
    )
};

export default InputSelectLevelFeature;