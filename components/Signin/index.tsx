import router from "next/router";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { sendCode, getToken } from "lib/api";
import { SecondaryButton } from "ui/buttons/index";
import { BodyStyle, TitleStyle } from "ui/typhography/index";

export function SignInComponent({ className }) {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [loginData, setLoginData] = useState({
        email: "",
        age: 0,
        username: "",
    });

    async function handleEmailForm (loginData) {
        setLoginData({
            email: loginData?.email,
            age: parseInt(loginData?.age),
            username: loginData?.username,
        });
    }

    useEffect(() => {
        if (loginData.username != "" && loginData.age != 0 || "0" && loginData.username != "") {
            sendCode(loginData);
        }
    }, [loginData]);
    
    async function handleCodeForm (formData) {

        try {

            const token = await getToken(loginData["email"], formData.code);
            router.push("/");

        } catch (err) {
            throw {
                message: "error en handleCode",
                err,
            }
        }
    }

    return <div className={className}>
    
        { loginData.email ?
            <form onSubmit={handleSubmit(handleCodeForm)} className="code-form">
                <TitleStyle> Código </TitleStyle>
                <BodyStyle> Te enviamos un código a tu mail </BodyStyle>
                <input className="code-input input" type="number" { ...register("code", { required: true, maxLength: 5 })} { ...watch } name="code" placeholder="Código..." />
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                    { errors.code && <span style={{ maxWidth: 150, textAlign: "center", color: "red", margin: 1 }}> El campo es requerido! </span> }
                    { errors.code && <span style={{ maxWidth: 180, textAlign: "center", color: "red", margin: 1 }}> Se puede hasta 5 caracteres :( </span> }
                </div>
                <SecondaryButton margin={10 + "px"} width={200 + "px"} height={35 + "px"}> Ingresar </SecondaryButton>
            </form>
        :
            <form onSubmit={handleSubmit(handleEmailForm)} className="signin-form">
                <TitleStyle> Ingresar </TitleStyle>

                <label className="label">
                    <div>
                        Nombre de usuario
                    </div>
                    <input className="name-input input" { ...register("username", { required: true, maxLength: 15 })} { ...watch } placeholder="Nombre de usuario..." type="text" />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        { errors.username && <span style={{ maxWidth: 150, textAlign: "center", color: "red", margin: 1 }}> El campo es requerido! </span> }
                        { errors.username && <span style={{ maxWidth: 200, textAlign: "center", color: "red", margin: 1 }}> Se puede hasta 15 caracteres :( </span> }
                    </div>

                </label>
                <label className="label">
                    <div>
                        Tu edad
                    </div>
                    <input className="age-input input" { ...register("age", { required: true, maxLength: 3 })} { ...watch } placeholder="Edad.." type="number" />
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                        { errors.age && <span style={{ maxWidth: 150, textAlign: "center", color: "red", margin: 2 }}> El campo es requerido! </span> }
                        { errors.age && <span style={{ maxWidth: 190, textAlign: "center", color: "red", margin: 2 }}> Máximo 3 dígitos! ( acaso tenés más de mil años!? 🤔 ) </span> }
                    </div>
                </label>
                <label className="label">
                    <div>
                        Email
                    </div>
                    <input className="email-input input" { ...register("email", { required: true }) } { ...watch } placeholder="Email..." type="email" />
                    <div style={{ display: "flex", flexDirection: "column" }}>
                        { errors.email && <span style={{ maxWidth: 150, alignSelf: "center", color: "red", margin: 5 }}> El campo es requerido! </span> }
                    </div>
                </label>
                <SecondaryButton margin={5 + "px"} width={200 + "px"} height={35 + "px"}> Continuar </SecondaryButton>
            </form>
        }
    </div>
}