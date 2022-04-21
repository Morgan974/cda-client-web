import React, {useCallback, useState} from "react";
import axios from "axios";

export const templateWebservice = () => (
    route : string,
    methode : string,
    dataToSend : Function,
    setDataReceived : Function,
    handleClose : Function
) => {
    if (methode === "post") {
        axios
            .post("http://localhost:1030/api/" + route, {
                ...dataToSend
            })
            .then(response => {
                console.log(response.data);
            });
    }
    if (methode === "post") {
        axios
            .post("http://localhost:1030/api/" + route, {
                ...dataToSend
            })
            .then(response => {
                console.log(response.data);
                setDataReceived(response.data);
            });
    }
    handleClose();
};