import React, {useCallback, useState} from "react";
import axios from "axios";
import ModalElement from "../Elements/ModalElement";

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
        if (dataToSend) {
            axios
                .post("http://localhost:1030/api/trek", {
                    ...dataToSend
                })
                .then(response => {
                    console.log(response.data);
                });
        }
        handleClose();
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