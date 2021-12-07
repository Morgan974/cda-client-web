import HeaderFeature from "../Feature/HeaderFeature";
import NavbarFeature from "../Feature/NavbarFeature";
import React from "react";
import FeatureTemplate from "../Template/FeatureTemplate";
import ListTrekFeature from "../Feature/ListTrekFeature";

const ListTrekPage: React.ComponentType = () => {
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
                    <ListTrekFeature />
                ]}
            />
        </div>
    );
}

export default ListTrekPage;