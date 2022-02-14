import React, {ReactElement} from "react";
import {Button, Modal} from "react-bootstrap";

interface Props {
    nameTrek : string;
    buttonElement: ReactElement;
    titleModal: string;
    handleRemove : any;
    show : boolean;
    setShow : (show : boolean) => void,
    handleClose: any;
}

const ModalRemoveElement: React.ComponentType<Props> = ({
    nameTrek,
    buttonElement,
    titleModal,
    handleRemove,
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
            <Button className="btn btn-view color-pur-black w-100" onClick={handleShow}>
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
                    <span>
                        Êtes - vous sur de vouloirs supprimés le trek :
                    </span>
                    <div className="fw-bold">
                        {nameTrek}
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-radius" variant="secondary" onClick={handleClose}>
                        Annuler
                    </Button>
                    <Button className="btn btn-view btn-radius" onClick={handleRemove}>
                        Supprimer
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalRemoveElement;