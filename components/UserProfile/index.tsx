import router from "next/router";
import { sendCode } from "lib/api";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { TitleStyle } from "ui/typhography/index";
import { SecondaryButton } from "ui/buttons/index";

export function UserDataComponent({ className }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loginData, setLoginData] = useState({
        email: "",
        address: "",
        username: "",
        age: 0,
    });

    function handleUserDataForm (loginData) {
        console.log(loginData);
        setLoginData(loginData);
    }

    useEffect(() => {
        if ( loginData.email != "" && loginData.age != 0 && loginData.username != "") {
            console.log(loginData);
            sendCode(loginData);
        }
    }, [loginData]);
    

    return <div className={className}>
    
        <form onSubmit={handleSubmit(handleUserDataForm)} className="user-form">
            <TitleStyle> Perfil </TitleStyle>

            <label className="label">
                <div> Nombre de usuario </div>
                <input className="name-input input" { ...register("username", { required: true, maxLength: 15 })} placeholder="Nombre de usuario..." type="text" />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    { errors.username && <span style={{ maxWidth: 150, textAlign: "center", color: "red", margin: 1 }}> El campo es requerido! </span> }
                    { errors.username && <span style={{ maxWidth: 200, textAlign: "center", color: "red", margin: 1 }}> Se puede hasta 15 caracteres :( </span> }
                </div>
            </label>

            <label className="label">
                <div> Tu edad </div>
                <input className="age-input input" { ...register("age", { required: true, maxLength: 3 })} placeholder="Edad.." type="number" />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    { errors.age && <span style={{ maxWidth: 150, textAlign: "center", color: "red", margin: 2 }}> El campo es requerido! </span> }
                    { errors.age && <span style={{ maxWidth: 190, textAlign: "center", color: "red", margin: 2 }}> Máximo 3 dígitos! ( acaso tenés más de mil años!? 🤔 ) </span> }
                </div>
            </label>

            <label className="label">
                <div> Tu edad </div>
                <input className="age-input input" { ...register("address", { required: true, maxLength: 20 })} placeholder="Dirección.." type="text" />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    { errors.address && <span style={{ maxWidth: 150, textAlign: "center", color: "red", margin: 2 }}> El campo es requerido! </span> }
                    { errors.address && <span style={{ maxWidth: 190, textAlign: "center", color: "red", margin: 2 }}> Máximo 20 dígitos </span> }
                </div>
            </label>

            <label className="label">
                <div> Email </div>
                <input className="email-input input" { ...register("email", { required: true }) } placeholder="Email..." type="email" />
                <div style={{ display: "flex", flexDirection: "column" }}>
                    { errors.email && <span style={{ maxWidth: 150, alignSelf: "center", color: "red", margin: 5 }}> El campo es requerido! </span> }
                </div>
            </label>
            <SecondaryButton margin={5 + "px"} width={200 + "px"} height={35 + "px"}> Guardar </SecondaryButton>
        </form>
    </div>
}