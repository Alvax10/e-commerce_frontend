import styled from "styled-components";
import { useForm } from "react-hook-form";
// import { useGetProduct } from "lib/hooks";
import { createBuyingOrder } from "lib/api";
import { SecondaryButton } from "ui/buttons";
import { TextField } from "ui/textField/index";
import { SubtitleStyle } from "ui/typhography";

const FormStyle = styled.form`

    display: flex;
    min-height: 400px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

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
    // const [ getProductData, setGetProductData ] = useGetProduct();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    function submitHandler(additionalInfo) {
        console.log("datita del form: ", additionalInfo);
        // console.log(getProductData);
        // const order = createBuyingOrder(getProductData.id, data).then(() => {
        //     setGetProductData((null as any));
        // });
        // console.log("Orden creada", order);
    }

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