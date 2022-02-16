import React, {useCallback, useState} from "react";
import axios from "axios";
import ModalElement from "../Elements/ModalElement";

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
        if (dataToSend) {
            axios
                .post("http://localhost:1030/api/trek/" + idTrek, {
                    ...dataToSend
                })
                .then(response => {
                    console.log(response.data);
                });
        }
        handleClose()
    }, [dataToSend, idTrek, handleClose]);

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