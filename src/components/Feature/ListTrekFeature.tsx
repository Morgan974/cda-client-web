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

        viewToDisplay = list.map((element: any) => {
            return (
                <CardTemplate
                    key={element.id}
                    className="col-xl-4 col-lg-6 mb-4"
                    classNameChildren="card-trek"
                    parameters={element}
                    setLoadData={setLoadData}
                />
            );
        });

        return (
            <div className="row col-md-12">
                {viewToDisplay}
            </div>
        );
    }, [setLoadData])

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        if(loadData) {
            console.log('and is here ?');
            axios
                .get("http://localhost:1030/api/treks", {
                    params: {
                        isEnabled: true,
                        ...dataToSend
                    }
                })
                .then(response => {
                    setListData(response.data);
                    setLoadData(false);
                });
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