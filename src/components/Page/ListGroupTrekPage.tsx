import HeaderFeature from "../Feature/HeaderFeature";
import NavbarFeature from "../Feature/NavbarFeature";
import React from "react";
import FeatureTemplate from "../Template/FeatureTemplate";

const ListGroupTrekPage: React.ComponentType = () => {
    return (
        <div className="body-layout">
            <NavbarFeature />
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