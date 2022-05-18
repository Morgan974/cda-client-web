import HeaderFeature from "../Feature/HeaderFeature";
import NavbarFeature from "../Feature/NavbarFeature";
import React from "react";
import FeatureTemplate from "../Template/FeatureTemplate";


interface Props {
    isAuthenticated : boolean;
    setIsAuthenticated: (isAuthenticated : boolean) => void;
}

const ListGroupTrekPage: React.ComponentType<Props> = ({
    isAuthenticated,
    setIsAuthenticated
}) => {

    return (
        <div className="body-layout">
            <NavbarFeature
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
            />
            <HeaderFeature />
            <FeatureTemplate
                leftComponent={
                    <>
                        leftComponent
                    </>
                }
                rightComponent={[
                    <>
                        rightComponent
                    </>
                ]}
            />
        </div>
    );
}

export default ListGroupTrekPage;