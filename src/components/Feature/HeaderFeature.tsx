import TitleElement from "../Elements/TitleElement";

function HeaderFeature() {
    return (
        <>
            <div className="header-container">
                <div className="row col-md-12 background-header-container">
                    <div className="background-header" />
                </div>
                <TitleElement
                    title="Les balad'a claire"
                    className="title-position-header"
                />
            </div>
        </>
    );
}

export default HeaderFeature;