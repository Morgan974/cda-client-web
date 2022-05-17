import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import LabelAbstract from "../Abstract/LabelAbstract";
import {useCallback, useEffect} from "react";
import axios from "axios";
import {AddressApi} from "../../config/CommonConst";

interface Props {
    setElements: any;
    label: string;
    classNameLabel?: string;
}

const SliderPriceFeature: React.ComponentType<Props> = ({
    setElements,
    label,
    classNameLabel
}) => {

    function valuetext (value : any) {
        return `${value}`;
    }

    /*******************************************************************************************************************
     *                                          state
     ******************************************************************************************************************/

    const [loadData, setLoadData] = React.useState<boolean>(false);
    const [priceMin, setPriceMin] = React.useState<number>();
    const [priceMax, setPriceMax] = React.useState<number>();
    const [value, setValue] = React.useState<number>(0);

    /*******************************************************************************************************************
     *                                          callback
     ******************************************************************************************************************/

    const handleSliderChange = useCallback((event : any, newValue : any) => {
        setValue(newValue);
    }, [setValue]);

    /*******************************************************************************************************************
     *                                          effect
     ******************************************************************************************************************/

    useEffect(() => {
        setElements(
            value
        )
    }, [setElements, value]);

    useEffect(() => {
        setLoadData(true);
    }, []);

    useEffect(() => {
        if(priceMax) {
            setValue(priceMax);
        }
    }, [priceMax]);

    useEffect(() => {
        if(loadData) {
            axios
                .get(AddressApi + "/api/prices")
                .then(response => {
                    setPriceMax(response.data.maxPrice);
                    setPriceMin(response.data.minPrice);

                });
            setLoadData(false);
        }
    }, [loadData, setLoadData]);

    /*******************************************************************************************************************
     *                                          render
     ******************************************************************************************************************/

    return (
        <>
            {label &&
                <LabelAbstract
                    label={label}
                    className={classNameLabel}
                />
            }
            <Box className="px-3 m-0 p-0">
                <div className="m-0 p-0">
                    <div className="row m-0 p-0">
                        <Slider
                            className="color-black"
                            getAriaLabel={() => 'price'}
                            value={value}
                            onChangeCommitted={handleSliderChange}
                            valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            min={priceMin}
                            max={priceMax}
                        />
                    </div>
                    <div className="row m-0 p-0 fs-12px fw-bold">
                        <p className="col d-flex justify-content-start indicePriceMin">{priceMin} €</p>
                        <p className="col d-flex justify-content-end indicePriceMax">{priceMax} €</p>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default SliderPriceFeature;