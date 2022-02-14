import React, {useEffect, useState} from "react";
import CheckboxSelectLevelFeature from "./CheckboxSelectLevelFeature";
import SliderPriceFeature from "./SliderPriceFeature";
import SliderDurationFeature from "./SliderDurationFeature";
import InputFeature from "../Elements/InputFeature";

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
    const [duration, setDuration] = useState<number|undefined>();
    const [search, setSearch] = useState<string|undefined>();

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        setDataToSend({
            idLevels : levels ? levels : undefined,
            price : price ? price : undefined,
            duration : duration ? duration : undefined,
            search : search ? search : undefined
        })
        setLoadData(true);
    }, [setDataToSend, levels, setLoadData, price, duration, search])

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <div className="block-search mb-4">
            <InputFeature
                setElement={setSearch}
                placeholder={"rechercher un trek..."}
            />
            <div className="pt-3">
                <CheckboxSelectLevelFeature
                    setElements={setLevels}
                    label="Difficulté"
                />
            </div>
            <div className="pt-3">
                <SliderDurationFeature
                    setElements={setDuration}
                    label="Durée"
                />
            </div>
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