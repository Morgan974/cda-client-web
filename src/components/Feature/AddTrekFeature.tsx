import React, {useCallback, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import axios from "axios";
import FormTrekFeature from "./FromTrekFeature";

interface Props {
    setLoadData : Function;
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

    const handleValidation = useCallback((e : any) => {
        if (dataToSend) {
            axios
                .post("http://localhost:1030/api/trek", {
                    ...dataToSend
                })
                .then(response => {
                    console.log(response.data);
                });
            setLoadData(true)
        }
        handleClose();
    }, [dataToSend, setLoadData]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <>
            <Button className="btn btn-view" onClick={handleShow}>
                <i className="fas fa-plus-circle" /> Ajouter un trek
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Ajouter un trek</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormTrekFeature
                        setDataToSend={setDataToSend}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button className="btn btn-view" onClick={handleValidation}>
                        Valider
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddTrekFeature;