import React, {useEffect, useState} from "react";
import LabelAbstract from "../Abstract/LabelAbstract";
import axios from "axios";
import CheckboxAbstract from "../Abstract/CheckboxAbstract";

interface Props {
    setElements : any;
    label?: string;
    classNameLabel?: string;
}

const CheckboxSelectLevelFeature: React.ComponentType<Props> = ({
    setElements,
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
                <CheckboxAbstract
                    setElements={setElements}
                    listElements={listElements}
                />
            }
        </>
    )
};

export default CheckboxSelectLevelFeature;