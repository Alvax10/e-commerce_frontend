import Router from "next/router";
import { useEffect } from "react";
import { useGetProduct } from "lib/hooks";
import { PrimaryButton } from "ui/buttons/index";
import { BodyStyle, SubtitleStyle } from "ui/typhography/index";

export function ProductIdComponent({ className }) {
    const [ getProductData, setGetProductData ] = useGetProduct();

    function createOrder(e) {
        e.preventDefault();
        // console.log(getProductData)
    }

    useEffect(() => {

        console.log(getProductData);
        if (!getProductData) {
            Router.push("/products");
        }
    },[]);

    return <div className={className}>
        <img className="product-image" src={getProductData?.src} alt="products image" />
        <SubtitleStyle className="product-name"> { getProductData?.productName } </SubtitleStyle>
        <SubtitleStyle className="price"> ${ getProductData?.price } </SubtitleStyle>
        <div onClick={createOrder} className="button"> <PrimaryButton width={250 + "px"} height={50 + "px"}> Comprar </PrimaryButton> </div>
        <BodyStyle className="description"> { getProductData?.description } </BodyStyle>
    </div>
}