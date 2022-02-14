import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import LabelAbstract from "../Abstract/LabelAbstract";
import {useCallback, useEffect} from "react";
import axios from "axios";
import ViewHourlyAbstract from "../Abstract/ViewHourlyAbstract";

interface Props {
    setElements: any;
    label: string;
    classNameLabel?: string;
}

const SliderDurationFeature: React.ComponentType<Props> = ({
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
    const [durationMin, setDurationMin] = React.useState<number>();
    const [durationMax, setDurationMax] = React.useState<number>();
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
        if(durationMax) {
            setValue(durationMax);
        }
    }, [durationMax]);

    useEffect(() => {
        if(loadData) {
            axios
                .get("http://localhost:1030/api/duration")
                .then(response => {
                    setDurationMax(response.data.maxDuration);
                    setDurationMin(response.data.minDuration);

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
                            min={durationMin ? Number(durationMin) : 0}
                            max={durationMax ? Number(durationMax) : 0}
                        />
                    </div>
                    <div className="row m-0 p-0 fs-12px fw-bold">
                        <p className="col d-flex justify-content-start indicePriceMin">
                            {
                                durationMin &&
                                <ViewHourlyAbstract hours={durationMin} />
                            }
                        </p>
                        <p className="col d-flex justify-content-end indicePriceMax">
                            {
                                durationMax &&
                                <ViewHourlyAbstract hours={durationMax} />
                            }
                        </p>
                    </div>
                </div>
            </Box>
        </>
    );
}

export default SliderDurationFeature;