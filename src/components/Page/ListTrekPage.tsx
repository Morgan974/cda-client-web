import HeaderFeature from "../Feature/HeaderFeature";
import NavbarFeature from "../Feature/NavbarFeature";
import React, {useEffect, useState} from "react";
import FeatureTemplate from "../Template/FeatureTemplate";
import ListTrekFeature from "../Feature/ListTrekFeature";
import SearchListTrekFeature from "../Feature/SearchListTrekFeature";

const ListTrekPage: React.ComponentType = () => {

    /*******************************************************************************************************************
     *                                          STATE
     ******************************************************************************************************************/

    const [dataToSend, setDataToSend] = useState<any>();
    const [loadData, setLoadData] = useState<boolean>(false);

    /*******************************************************************************************************************
     *                                          EFFECT
     ******************************************************************************************************************/

    useEffect(() => {
        setLoadData(true);
    }, [setLoadData]);

    /*******************************************************************************************************************
     *                                          RENDER
     ******************************************************************************************************************/

    return (
        <div className="body-layout">
            <NavbarFeature />
            <HeaderFeature />
            <FeatureTemplate
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
    );
}

export default ListTrekPage;