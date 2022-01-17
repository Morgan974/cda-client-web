import React, {useEffect, useState} from "react";
import CheckboxSelectLevelFeature from "./CheckboxSelectLevelFeature";

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

    const [levels, setLevels] = useState<number[]|undefined>([]);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        setDataToSend(
            levels ? levels : undefined
        )
        setLoadData(true);
    }, [setDataToSend, levels, setLoadData])

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <div className="block-search">
            <CheckboxSelectLevelFeature
                setElements={setLevels}
                label="Difficulté"
            />
        </div>
    )
};

export default SearchListTrekFeature;