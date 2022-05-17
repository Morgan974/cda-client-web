import React, {useCallback, useState} from "react";
import axios from "axios";
import {AddressApi} from "../config/CommonConst";

export const templateWebservice = () => (
    route : string,
    methode : string,
    dataToSend : Function,
    setDataReceived : Function,
    handleClose : Function
) => {
    if (methode === "post") {
        axios
            .post(AddressApi + "/api/" + route, {
                ...dataToSend
            })
            .then(response => {
                console.log(response.data);
            });
    }
    if (methode === "post") {
        axios
            .post(AddressApi + "/api/" + route, {
                ...dataToSend
            })
            .then(response => {
                console.log(response.data);
                setDataReceived(response.data);
            });
    }
    handleClose();
};