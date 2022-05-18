import HeaderFeature from "../Feature/HeaderFeature";
import NavbarFeature from "../Feature/NavbarFeature";
import React, {ReactElement, useEffect, useState} from "react";
import FeatureTemplate from "../Template/FeatureTemplate";
import ListTrekFeature from "../Feature/ListTrekFeature";
import SearchListTrekFeature from "../Feature/SearchListTrekFeature";
import AddTrekFeature from "../Feature/AddTrekFeature";

interface Props {
    isAuthenticated : boolean;
    setIsAuthenticated: (isAuthenticated : boolean) => void;
}

const ListTrekPage: React.ComponentType<Props> = ({
    isAuthenticated,
    setIsAuthenticated
}) => {

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
        setBody(
            <div className="body-layout">
                <NavbarFeature
                    isAuthenticated={isAuthenticated}
                    setIsAuthenticated={setIsAuthenticated}
                />
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
                            isAdmin={true}
                        />
                    ]}
                />
            </div>
        )
    }, [isAuthenticated, setIsAuthenticated, dataToSend, loadData]);

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