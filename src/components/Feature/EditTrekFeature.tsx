import React, {useCallback, useState} from "react";
import axios from "axios";
import ModalElement from "../Elements/ModalElement";
import {AddressApi} from "../../config/CommonConst";

interface Props {
    setLoadData : Function;
    idTrek : string;
    parameters : any;
}

const EditTrekFeature: React.ComponentType<Props> = ({
     setLoadData,
     idTrek,
     parameters
 }) => {

    /*******************************************************************************************************************
     *                                          state
     ******************************************************************************************************************/

    const [dataToSend, setDataToSend] = useState<any>({});
    const [show, setShow] = useState(false);

    /*******************************************************************************************************************
     *                                          callback
     ******************************************************************************************************************/

    const handleClose = useCallback(() => {
        setLoadData(true);
        setShow(false);
    }, [setLoadData]);

    const handleValidation = useCallback((e : any) => {

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
                .post(AddressApi + "/api/trek/" + idTrek, {
                    ...dataToSend
                })
                .then(response => {
                    console.log(response.data);
                    setLoadData(false);
                });
            handleClose()
        }
    }, [dataToSend, idTrek, handleClose, setLoadData]);

    /*******************************************************************************************************************
     *                                          effect
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          render
     ******************************************************************************************************************/

    return (
        <ModalElement
            parameters={parameters}
            className={"w-100"}
            buttonElement={
                <>
                    <i className="fas fa-edit" />
                </>
            }
            titleModal={"Éditer le trek"}
            handleValidation={handleValidation}
            setDataToSend={setDataToSend}
            show={show}
            setShow={setShow}
            handleClose={handleClose}
        />
    );
}

export default EditTrekFeature;