import React, {useCallback, useEffect, useState} from "react";
import {Button, Modal} from "react-bootstrap";
import InputFeature from "../Elements/InputFeature";
import TextareaFeature from "../Elements/TextareaFeature";
import axios from "axios";

interface Props {}

const AddTrekFeature: React.ComponentType<Props> = ({}) => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    const [loadData, setLoadData] = useState<boolean>(false);
    const [dataToSend, setDataToSend] = useState<any>({});
    const [show, setShow] = useState(false);
    const [name, setName] = useState<string>('');
    const [duration, setDuration] = useState<string>('');
    const [price, setPrice] = useState<string>('');
    const [description, setDescription] = useState<string>('');

    /*******************************************************************************************************************
     *                                          CALLBACK
     ******************************************************************************************************************/

    const handleValidation = useCallback((e : any) => {
        setDataToSend({
            name : name,
            duration : duration,
            price : price,
            description : description
        })
        setLoadData(true)
        handleClose()
    }, [setDataToSend, name, duration, price, description]);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {


        if (loadData) {
            axios
                .post("http://localhost:1030/api/trek", {
                    ...dataToSend
                })
                .then(response => {
                    console.log(response.data);
                });
            setLoadData(false)
        }
    }, [dataToSend, loadData]);

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
                    <InputFeature
                        label={"Nom"}
                        setElement={setName}
                    />
                    <InputFeature
                        label={"Duration"}
                        setElement={setDuration}
                    />
                    <InputFeature
                        label={"Prix"}
                        setElement={setPrice}
                    />
                    <TextareaFeature
                        label={"Description"}
                        setElement={setDescription}
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