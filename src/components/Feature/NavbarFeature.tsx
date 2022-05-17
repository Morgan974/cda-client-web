import UserMenuFeature from "./UserMenuFeature";
import BtnMenueElement from "../Elements/BtnMenuelement";

function NavbarFeature() {

    const nameMenu : string = "Rando à la journée";
    const nameMenu2 : string = "Dashboard";

    return (
        <div className='navbar row'>
            <div className="col-md-8">
                <BtnMenueElement
                    className="col-md-2"
                    nameMenu={<>{nameMenu}</>}
                    path={"/"}
                />
                <BtnMenueElement
                    className="col-md-2"
                    nameMenu={<>{nameMenu2}</>}
                    path={"/admin/list-trek"}
                />
            </div>
            <div className="col-md-4 d-flex justify-content-end">
                <UserMenuFeature />
            </div>
        </div>
    );
}

export default NavbarFeature;