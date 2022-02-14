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
    const [distance, setDistance] = useState<string>('');
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
                    label={"Distance"}
                    element={distance}
                    setElement={setDistance}
                />
                <InputFeature
                    label={"Prix"}
                    element={price}
                    setElement={setPrice}
                />
                <TextareaFeature
                    label="Description (courte)"
                    element={description}
                    setElement={setDescription}
                />
                <InputSelectLevelFeature
                    label="Sélectionner la difficulté"
                    element={level}
                    setElement={setLevel}
                />
            </>
        );
    }, [name, setName, description, setDescription, price, setPrice, distance, setDistance, duration, setDuration, level, setLevel]);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        if (parameters) {
            setName(parameters.name);
            setDescription(parameters.description);
            setPrice(parameters.price);
            setDistance(parameters.distance);
            setDuration(parameters.duration);
            setLevel(parameters.level.id);
        }
    }, [parameters]);

    useEffect(() => {
        setDataToSend({
            name : name,
            duration : duration,
            price : price,
            distance : distance,
            description : description,
            level: level
        });
    }, [setDataToSend, parameters, name, duration, price, distance, description, level]);

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