import React, {useCallback, useState} from "react";
import axios from "axios";
import ModalElement from "../Elements/ModalElement";
import {AddressApi} from "../../config/CommonConst";

interface Props {
    setLoadData : (loadData : boolean) => void;
}

const AddTrekFeature: React.ComponentType<Props> = ({
    setLoadData
}) => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    const [dataToSend, setDataToSend] = useState<any>({});
    const [show, setShow] = useState(false);

    /*******************************************************************************************************************
     *                                          CALLBACK
     ******************************************************************************************************************/

    const handleClose = useCallback(() => {
        setLoadData(true);
        setShow(false);
    }, [setLoadData]);

    const handleValidation = useCallback(() => {
        let haveError = false;

        for (const [key, value] of Object.entries(dataToSend)) {
            const element = document.getElementById(key + "-input-alert");
            console.log(key, value);
            if(value === undefined || !value) {
                if (element) {
                    element.innerHTML = "Ce champs ne peut être null et doit être renseigné";
                    element.classList.remove("d-none");
                    haveError = true;
                }
            } else {
                if (element) {
                    element.classList.add("d-none");

                }
            }
        }

        if (!haveError && dataToSend) {
            axios
                .post( AddressApi + "/api/trek", {
                    ...dataToSend
                })
                .then(response => {
                    console.log(response.data);
                });
            handleClose();
        }
    }, [dataToSend, handleClose]);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <ModalElement
            className="btn-radius"
            buttonElement={
                <>
                    <i className="fas fa-plus-circle" /> Ajouter le trek
                </>
            }
            titleModal={"Ajouter le trek"}
            handleValidation={handleValidation}
            setDataToSend={setDataToSend}
            show={show}
            setShow={setShow}
            handleClose={handleClose}
        />
    );
}

export default AddTrekFeature;