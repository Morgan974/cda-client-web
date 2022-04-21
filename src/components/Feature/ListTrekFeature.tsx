import React, {ReactElement, useCallback, useEffect, useState} from "react";
import axios from 'axios';
import CardTemplate from "../Template/CardTemplate";

interface Props {
    dataToSend: any;
    loadData: boolean;
    setLoadData: (loadData:boolean) => (void);
    isAdmin?: boolean;
}

const ListTrekFeature: React.ComponentType<Props> = (
    {
        dataToSend,
        loadData,
        setLoadData,
        isAdmin
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

        if(loadData) {
            viewToDisplay = list.map((element: any) => {
                return (
                    <CardTemplate
                        key={element.id}
                        className="col-xl-4 col-lg-6 mb-4"
                        classNameChildren="card-trek"
                        parameters={element}
                        setLoadData={setLoadData}
                        isAdmin={isAdmin}
                    />
                );
            });

            return (
                <div className="row col-md-12">
                    {viewToDisplay}
                </div>
            );
        }
    }, [loadData, setLoadData, isAdmin]);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
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
                    setLoadData(false);
                });
        }
    }, [loadData, dataToSend, setLoadData]);

    useEffect(() => {
        if(loadData) {
            setBody(generateListViewFunc(listData));
        }
    }, [loadData, listData, generateListViewFunc])

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