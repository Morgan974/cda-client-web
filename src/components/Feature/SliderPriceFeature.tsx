import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import LabelAbstract from "../Abstract/LabelAbstract";
import {useCallback, useEffect} from "react";

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

    const [value, setValue] = React.useState<number>(12000);

    /*******************************************************************************************************************
     *                                          callback
     ******************************************************************************************************************/

    const handleSliderChange = useCallback((event : any, newValue : any) => {
        setValue(newValue);
    }, [setValue]);

    useEffect(() => {
        setElements(
            value
        )
    }, [setElements, value]);

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
            <Box className="px-3">
                <Slider
                    className="color-black"
                    getAriaLabel={() => 'price'}
                    value={value}
                    onChangeCommitted={handleSliderChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    min={120}
                    max={12000}
                />
            </Box>
        </>
    );
}

export default SliderPriceFeature;