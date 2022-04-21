import React, {useCallback, useEffect, useState} from "react";
import TextareaElement from "../Elements/TextareaElement";
import InputSelectLevelFeature from "./InputSelectLevelFeature";
import InputNumberElement from "../Elements/InputNumberElement";
import InputTextElement from "../Elements/InputTextElement";

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

    const [name, setName] = useState<string>(), nameLabel = "name";
    const [duration, setDuration] = useState<number>(), durationLabel = "duration";
    const [price, setPrice] = useState<number>(), priceLabel = "price";
    const [distance, setDistance] = useState<number>(), distanceLabel = "distance";
    const [description, setDescription] = useState<string>(), descriptionLabel = "description";
    const [level, setLevel] = useState<string>(''), levelLabel= "level";

    /*******************************************************************************************************************
     *                                          CALLBACK
     ******************************************************************************************************************/

    const generateFormBody = useCallback(() => {
        return (
            <>
                <InputTextElement
                    keyName={nameLabel}
                    label={"Nom"}
                    element={name}
                    setElement={setName}
                />
                <InputNumberElement
                    keyName={durationLabel}
                    label={"Durée"}
                    element={duration}
                    setElement={setDuration}
                />
                <InputNumberElement
                    keyName={distanceLabel}
                    label={"Distance"}
                    element={distance}
                    setElement={setDistance}
                />
                <InputNumberElement
                    keyName={priceLabel}
                    label={"Prix"}
                    element={price}
                    setElement={setPrice}
                />
                <TextareaElement
                    keyName={descriptionLabel}
                    label={"Description"}
                    element={description}
                    setElement={setDescription}
                />
                <InputSelectLevelFeature
                    key={levelLabel}
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