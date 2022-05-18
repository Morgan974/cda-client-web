import React, {useState} from "react";
import NavbarFeature from "../Feature/NavbarFeature";
import HeaderFeature from "../Feature/HeaderFeature";
import AuthApi from "../../tools/AuthApi";

interface Props {
    isAuthenticated : boolean;
    setIsAuthenticated: (isAuthenticated : boolean) => void;
}

const LoginPage: React.ComponentType<Props> = ({
    isAuthenticated,
    setIsAuthenticated
}) => {

    const [credentials, setCredentials] = useState({
        username: '',
        password: ''
    });

    const [error, setError] = useState("");

    const handleChange = ({currentTarget} : any) => {
        const {value, name} = currentTarget;
        setCredentials({...credentials, [name]: value})
    }

    const handleSubmit = async (event : any) => {
        event.preventDefault();
        await AuthApi.authenticate(credentials, setError, setIsAuthenticated);
    }

    return (
        <div className="body-layout w-100 height-full">
            <NavbarFeature
                isAuthenticated={isAuthenticated}
                setIsAuthenticated={setIsAuthenticated}
            />
            <HeaderFeature />
            <div className="p-5 color-black">
                <div className="fs-24px">Connexion à l'application</div>
                <form onSubmit={handleSubmit}>
                    <div className="form-group py-2">
                        <label className="pb-2" htmlFor="username">Addresse email</label>
                        <input
                            value={credentials.username}
                            onChange={handleChange}
                            type="email"
                            className={"form-control" + (error && " is-invalid")}
                            placeholder="Addresse email de connexion"
                            name="username"
                            id="username"
                        />
                        {error &&
                            <p className="invalid-feedback">
                                {error}
                            </p>
                        }
                    </div>
                    <div className="form-group py-2">
                        <label className="pb-2" htmlFor="password">Mot de passe</label>
                        <input
                            value={credentials.password}
                            onChange={handleChange}
                            type="password"
                            className="form-control"
                            placeholder="Mot de passe"
                            name="password"
                            id="password"
                        />
                    </div>
                    <div className="form-group py-2">
                        <button type="submit" className="btn btn-view">Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;