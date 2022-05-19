import React, {useEffect, useState} from "react";
import NavbarFeature from "../Feature/NavbarFeature";
import HeaderFeature from "../Feature/HeaderFeature";
import AuthApi from "../../tools/AuthApi";

interface Props {
    isAuthenticated : boolean;
    setIsAuthenticated: (isAuthenticated : boolean) => void;
}

const RegisterPage: React.ComponentType<Props> = ({
    isAuthenticated,
    setIsAuthenticated
}) => {

    const [datas, setDatas] = useState({
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const [errors, setErrors] = useState<any>({});
    const [haveErrors, setHaveErrors] = useState(true);
    const [isSubmit, setIsSubmit] = useState(false);
    const [emailExist, setEmailExist] = useState('');

    const handleChange = ({currentTarget} : any) => {
        const {value, name} = currentTarget;
        setDatas({...datas, [name]: value})
    }

    const handleSubmit = (event : any) => {
        event.preventDefault();
        setErrors(validate(datas));
        setIsSubmit(true)
    };

    const validate = (datas : any) => {
        const errors = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            passwordLength: '',
            confirmPassword: '',
            passwordDoNotMatch: '',
            passwordDontPassRegex: ''
        };

        let strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");

        if(!datas.firstname) {
            errors.firstname = "Le prénom est requis !";
            setHaveErrors(true);
        }

        if(!datas.lastname) {
            errors.lastname = "Le nom est requis !";
            setHaveErrors(true);
        }

        if(!datas.email) {
            errors.email = "L'addresse email est requis !";
            setHaveErrors(true);
        }

        if(!datas.password) {
            errors.password = "Le mot de passe est requis !";
            setHaveErrors(true);
        }

        if(datas.password.length < 8) {
            errors.passwordLength = "Le mot de passe doit faire entre 8 et 255 caractères !";
            setHaveErrors(true);
        }

        console.log('strongRegex.test(datas.password)');
        console.log(strongRegex.test(datas.password));

        if(!strongRegex.test(datas.password)) {
            console.log('is here ?');
            errors.passwordDontPassRegex = "Le mot de passe doit contenir au moins 1 minuscule, 1 majuscule, 1 chiffre et 1 caractères spécial !";
            setHaveErrors(true);
        }

        if(!datas.confirmPassword) {
            errors.confirmPassword = "Le mot de passe de confirmation est requis !";
            setHaveErrors(true);
        }


        if(datas.password !== datas.confirmPassword) {
            errors.passwordDoNotMatch = "Les mots de passe ne correspondent pas !";
            setHaveErrors(true);
        }

        if (
            errors.firstname === '' &&
            errors.lastname === '' &&
            errors.email === '' &&
            errors.password === '' &&
            errors.passwordDontPassRegex === '' &&
            errors.confirmPassword === '' &&
            errors.passwordDoNotMatch === ''
        ) {
            setHaveErrors(false);
        }

        return errors;
    }

    useEffect(() => {
        if(!haveErrors && isSubmit) {
            AuthApi.register(datas, setEmailExist);
        }
    }, [haveErrors, datas, isSubmit]);

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
                        <label className="pb-2" htmlFor="firstname">Prénom</label>
                        <input
                            value={datas.firstname}
                            onChange={handleChange}
                            type="text"
                            className={"form-control"}
                            placeholder="Prénom"
                            name="firstname"
                            id="firstname"
                        />
                        <p className="text-error">{errors.firstname}</p>
                    </div>
                    <div className="form-group py-2">
                        <label className="pb-2" htmlFor="lastname">Nom</label>
                        <input
                            value={datas.lastname}
                            onChange={handleChange}
                            type="text"
                            className={"form-control"}
                            placeholder="Nom"
                            name="lastname"
                            id="lastname"
                        />
                        <p className="text-error">{errors.lastname}</p>
                    </div>
                    <div className="form-group py-2">
                        <label className="pb-2" htmlFor="firstname">Email</label>
                        <input
                            value={datas.email}
                            onChange={handleChange}
                            type="email"
                            className={"form-control"}
                            placeholder="Email"
                            name="email"
                            id="email"
                        />
                        <p className="text-error">{errors.email}</p>
                        {emailExist &&
                            <p className="text-error">Cette adresse e-mail est déjà utilisée !</p>
                        }
                    </div>
                    <div className="form-group py-2">
                        <label className="pb-2" htmlFor="password">Mot de passe</label>
                        <input
                            value={datas.password}
                            onChange={handleChange}
                            type="password"
                            className="form-control"
                            placeholder="Mot de passe"
                            name="password"
                            id="password"
                        />
                        <p className="text-error">{errors.password}</p>
                        <p className="text-error">{errors.passwordLength}</p>
                        <p className="text-error">{errors.passwordDoNotMatch}</p>
                        <p className="text-error">{errors.passwordDontPassRegex}</p>
                    </div>
                    <div className="form-group py-2">
                        <label className="pb-2" htmlFor="password">Confirmer votre mot de passe</label>
                        <input
                            value={datas.confirmPassword}
                            onChange={handleChange}
                            type="password"
                            className="form-control"
                            placeholder="Confirmer votre mot de passe"
                            name="confirmPassword"
                            id="confirmPassword"
                        />
                        <p className="text-error">{errors.confirmPassword}</p>
                    </div>
                    <div className="form-group py-2">
                        <button type="submit" className="btn btn-view">Connexion</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default RegisterPage;