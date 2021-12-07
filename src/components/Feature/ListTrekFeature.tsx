import React, {ReactElement, useCallback, useEffect, useState} from "react";
import axios from 'axios';
import CardTemplate from "../Template/CardTemplate";

interface Props {
    dataToSend: any;
    loadData: boolean;
    setLoadData: (loadData:boolean) => (void);
}

const ListTrekFeature: React.ComponentType<Props> = (
    {
        dataToSend,
        loadData,
        setLoadData
    }) => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    const [listData, setListData] = useState([]);
    const [body, setBody] = useState<ReactElement>();

    /*******************************************************************************************************************
     *                                          CALLBACK
     ******************************************************************************************************************/

    const  generateListViewFunc = useCallback((list: any) => {
        let viewToDisplay:string|ReactElement;

        viewToDisplay = list.map((element: any, index : number) => {
            return (
                <CardTemplate
                    className="col-md-3"
                    classNameChildren="card-trek"
                    parameters={element}
                />
            );
        });

        return (
            <div className="row col-md-12">
                {viewToDisplay}
            </div>
        );
    }, [])

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        console.log(dataToSend);
        if(loadData) {
            axios
                .get("http://localhost:1030/api/treks", {
                    params: {
                        isEnabled: true,
                        ...dataToSend
                    }
                })
                .then(response => {
                    setListData(response.data);
                });
            setLoadData(false);
        }
    }, [loadData, dataToSend, setLoadData]);

    useEffect(() => {
        setBody(generateListViewFunc(listData));
    }, [listData, generateListViewFunc])

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <>
            {body}
        </>
    );
}

export default ListTrekFeature;