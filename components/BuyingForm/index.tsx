import Router from "next/router";
import { useEffect } from "react";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useGetProduct } from "lib/hooks";
import { createBuyingOrder } from "lib/api";
import { SecondaryButton } from "ui/buttons";
import { SubtitleStyle } from "ui/typhography";

const FormStyle = styled.form`

    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media(min-height: 530px) {
        min-height: 680px;
    }

    .input-address {
        padding: 7px;
        min-width: 220px;
        min-height: 30px;
        border-radius: 4px;
        border: 1px solid #000;
    }

    .more-info {
        padding: 7px;
        min-width: 220px;
        min-height: 60px;
        border-radius: 4px;
        border: 1px solid #000;
    }
`;

export function BuyingForm() {
    const [ getProductData, setGetProductData ] = useGetProduct();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    async function submitHandler(additionalInfo) {
        
        console.log("El id del producto: ", getProductData.id);
        const order = await createBuyingOrder(getProductData.id, additionalInfo);
        console.log(order);
        window.open(order?.url);
        setGetProductData((null as any));
    }

    useEffect(() => {
        if (!getProductData) {
            Router.push("/");
        }

    }, []);

    return <FormStyle onSubmit={handleSubmit(submitHandler)}>
        <SubtitleStyle> Dejanos información adicional : </SubtitleStyle>

        <label style={{ marginTop: 20, marginBottom: 5 }}>
            <div> Dirección de envío </div>
            <input placeholder="Dirección de envío..." className="input-address" { ...register("address", { required: true })} type="text" />
        </label>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            { errors.address && <span style={{ maxWidth: 150, textAlign: "center", color: "red", margin: 1 }}> El campo es requerido! </span> }
        </div>

        <label style={{ marginTop: 20, marginBottom: 20 }}>
            <div> Información extra </div>
            <textarea style={{ marginTop: 10 }} className="more-info" { ...register("additionalInfo") } placeholder="Información adicional?..."></textarea>
        </label>
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            { errors.additionalInfo && <span style={{ maxWidth: 150, textAlign: "center", color: "red", margin: 1 }}> Ocurrió un error y no sabemos por qué 🤔 </span> }
        </div>

        <SecondaryButton width={250 + "px"} height={40 + "px"} > Enviar </SecondaryButton>
    </FormStyle>
}