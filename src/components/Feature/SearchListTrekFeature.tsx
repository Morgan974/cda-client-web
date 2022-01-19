import React, {useEffect, useState} from "react";
import CheckboxSelectLevelFeature from "./CheckboxSelectLevelFeature";
import SliderPriceFeature from "./SliderPriceFeature";

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

    const [levels, setLevels] = useState<string[]|undefined>([]);
    const [price, setPrices] = useState<number|undefined>();

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        setDataToSend({
            idLevels : levels ? levels : undefined,
            price : price ? price : undefined
        })
        setLoadData(true);
    }, [setDataToSend, levels, setLoadData, price])

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <div className="block-search">
            <CheckboxSelectLevelFeature
                setElements={setLevels}
                label="Difficulté"
            />
            <div className="pt-3">
                <SliderPriceFeature
                    setElements={setPrices}
                    label="Prix"
                />
            </div>
        </div>
    )
};

export default SearchListTrekFeature;