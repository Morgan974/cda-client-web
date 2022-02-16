import HeaderFeature from "../Feature/HeaderFeature";
import NavbarFeature from "../Feature/NavbarFeature";
import React, {ReactElement, useEffect, useState} from "react";
import FeatureTemplate from "../Template/FeatureTemplate";
import ListTrekFeature from "../Feature/ListTrekFeature";
import SearchListTrekFeature from "../Feature/SearchListTrekFeature";
import AddTrekFeature from "../Feature/AddTrekFeature";

const ListTrekPage: React.ComponentType = () => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    const [dataToSend, setDataToSend] = useState<any>({});
    const [loadData, setLoadData] = useState<boolean>(false);
    const [body, setBody] = useState<ReactElement>(<></>);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        setLoadData(true);
    }, []);

    useEffect(() => {
        setBody(
            <div className="body-layout">
                <NavbarFeature />
                <HeaderFeature />
                <FeatureTemplate
                    menuElement={
                        <AddTrekFeature
                            setLoadData={setLoadData}
                        />
                    }
                    leftComponent={
                        <SearchListTrekFeature
                            setLoadData={setLoadData}
                            setDataToSend={setDataToSend}
                        />
                    }
                    rightComponent={[
                        <ListTrekFeature
                            dataToSend={dataToSend}
                            loadData={loadData}
                            setLoadData={setLoadData}
                        />
                    ]}
                />
            </div>
        )
    }, [dataToSend, loadData]);

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <>
            {body}
        </>
    );
}

export default ListTrekPage;