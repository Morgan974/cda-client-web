import React, {useEffect, useState} from "react";
import InputSelectElement from "../Elements/InputSelectElement";

interface Props {
    setDataToSend : (dataToSend : any) => (void);
    setLoadData : (loadData : boolean) => (void);
}

const SearchListTrekFeature: React.ComponentType<Props> = ({
    setDataToSend,
    setLoadData
}) => {

    /*******************************************************************************************************************
     *                                          State
     ******************************************************************************************************************/

    const [level, setLevel] = useState<string|undefined>(undefined);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        setDataToSend({
            idLevel : level?level:undefined
        })
        setLoadData(true);
    }, [setDataToSend, level, setLoadData])

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <InputSelectElement
            element={level}
            setElement={setLevel}
            label="Difficulté"
        />
    )
};

export default SearchListTrekFeature;