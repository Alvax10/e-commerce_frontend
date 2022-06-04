import Router from "next/router";
import { useEffect } from "react";
import { useGetProduct } from "lib/hooks";
import { PrimaryButton, TertiaryButton } from "ui/buttons/index";
import { BodyStyle, SubtitleStyle, TitleStyle } from "ui/typhography/index";

export function ProductIdComponent({ className }) {
    const [ getProductData, setGetProductData ] = useGetProduct();

    async function createOrder(e) {
        e.preventDefault();
        Router.push("/checkout/" + getProductData.id);
    }

    function goToProducts(e) {
        e.preventDefault();
        Router.push("/products");
    }

    useEffect(() => {
        // console.log("EN EL USEEFFECT");
        localStorage.removeItem("recoil-persist");
    },[]);

    return getProductData ? <div className={className}>
        <img className="product-image" src={getProductData?.src} alt="products image" />
        <SubtitleStyle className="product-name"> { getProductData?.productName } </SubtitleStyle>
        <SubtitleStyle className="price"> ${ getProductData?.price } </SubtitleStyle>
        <div onClick={createOrder} className="button"> <PrimaryButton width={250 + "px"} height={50 + "px"}> Comprar </PrimaryButton> </div>
        <BodyStyle className="description"> { getProductData?.description } </BodyStyle>
    </div>

    :

    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", minHeight: 600, justifyContent: "center" }}>
        <TitleStyle> El producto se perdió </TitleStyle>
        <div onClick={goToProducts}> <TertiaryButton width={250 + "px"} height={40 + "px"} margin={5 + "px"}> Volver a productos </TertiaryButton> </div>
    </div>
}