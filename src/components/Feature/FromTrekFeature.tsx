import React, {useCallback, useEffect, useState} from "react";
import InputFeature from "../Elements/InputFeature";
import TextareaFeature from "../Elements/TextareaFeature";
import InputSelectLevelFeature from "./InputSelectLevelFeature";

interface Props {
    setDataToSend : Function;
    parameters? : any;
    idTrek?: string;
}

const FormTrekFeature: React.ComponentType<Props> = ({
    setDataToSend,
    parameters
}) => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    const [name, setName] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');
    const [level, setLevel] = useState<string>('');

    /*******************************************************************************************************************
     *                                          CALLBACK
     ******************************************************************************************************************/

    const generateFormBody = useCallback(() => {
        return (
            <>
                <InputFeature
                    label={"Nom"}
                    element={name}
                    setElement={setName}
                />
                <InputFeature
                    label={"Duration"}
                    element={duration}
                    setElement={setDuration}
                />
                <InputFeature
                    label={"Prix"}
                    element={price}
                    setElement={setPrice}
                />
                <TextareaFeature
                    label={"Description"}
                    element={description}
                    setElement={setDescription}
                />
                <InputSelectLevelFeature
                    element={level}
                    setElement={setLevel}
                />
            </>
        );
    }, [name, setName, description, setDescription, price, setPrice, duration, setDuration, level, setLevel]);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        if (parameters) {
            setName(parameters.name);
            setDescription(parameters.description);
            setPrice(parameters.price);
            setDuration(parameters.duration);
            setLevel(parameters.level);
        }
    }, [parameters]);

    useEffect(() => {
        setDataToSend({
            name : name,
            duration : duration,
            price : price,
            description : description,
            level: level
        });
    }, [setDataToSend, parameters, name, duration, price, description, level]);

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <>
            {generateFormBody()}
        </>
    );
}

export default FormTrekFeature;