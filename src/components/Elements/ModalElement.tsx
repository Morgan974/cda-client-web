import React, {ReactElement} from "react";
import {Button, Modal} from "react-bootstrap";
import FormTrekFeature from "../Feature/FromTrekFeature";

interface Props {
    parameters? : any;
    className?: string;
    buttonElement: ReactElement;
    titleModal: string;
    handleValidation : any;
    setDataToSend : Function;
    show : boolean;
    setShow : (show : boolean) => void,
    handleClose: any;
}

const ModalElement: React.ComponentType<Props> = ({
    parameters,
    className,
    buttonElement,
    titleModal,
    handleValidation,
    setDataToSend,
    show,
    setShow,
    handleClose
}) => {

    /*******************************************************************************************************************
     *                                          callback
     ******************************************************************************************************************/

    const handleShow = () => setShow(true);

    /*******************************************************************************************************************
     *                                          effect
     ******************************************************************************************************************/

    /*******************************************************************************************************************
     *                                          render
     ******************************************************************************************************************/

    return (
        <>
            <Button className={"btn btn-view color-pur-black " + className} onClick={handleShow}>
                {buttonElement}
            </Button>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>
                        {titleModal}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <FormTrekFeature
                        setDataToSend={setDataToSend}
                        parameters={parameters}
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-radius" variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button className="btn btn-view btn-radius" onClick={handleValidation}>
                        Valider
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalElement;