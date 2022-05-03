import Router from "next/router";
import styled from "styled-components";
import { BodyStyle } from "ui/typhography/index";
import { HeartIcon, TrashCanIcon } from "ui/icons";
import { removeProductFromCart, addProductToCart, getSavedToken } from "lib/api";
import { useGetProduct } from "lib/hooks";

type CardType = {
    src: string,
    price: number,
    className: string,
    productName: string,
    id: string,
    description: string,
}

const DivContainer = styled.div`

    max-width: 380px;
    margin-bottom: 35px;
    border-radius: 10px;
    border: solid 2px #000;

    @media(min-width: 450px) {
        display: flex;
        max-width: 400px;
        align-self: center;
        flex-direction: column;
    }
`;

const ImgStyle = styled.img`
    max-width: 380px;
    max-height: 380px;
    align-self: center;
    border-radius: 10px;

    @media(max-width: 650px) {
        max-width: 225px;
    }
`;

function ProductCardUI({ className, productName, src, price, id, description }: CardType) {
    const [ sendProductData, setSendProductData ] = useGetProduct();
    const token = getSavedToken();

    function goToProduct(e) {
        e.preventDefault();
        setSendProductData({ productName, price, src, id, description});
        Router.push("/products/" + id);
    }

    async function addProductToFavs(e) {
        e.preventDefault();
        console.log(id);

        if (token) {
            
            await addProductToCart(id);
            await alert("Producto añadido! 😎");

        } else {
            alert("Necesitas estar logueado para añadir productos a favoritos");
        }
    }

    return <DivContainer>
        <ImgStyle alt="Product Image" src={src} onClick={goToProduct} />

        <div className={className}>
            <BodyStyle className="product-name"> { productName } </BodyStyle>
            <BodyStyle className="product-price"> ${ price } </BodyStyle>
            <div className="product-fav" onClick={addProductToFavs}> <HeartIcon width={35} height={35} /> </div>
        </div>
    </DivContainer>
}

function MyProductsCardUI({ className, productName, src, price, id, description }: CardType) {
    const [ sendProductData, setSendProductData ] = useGetProduct();

    function goToProduct(e) {
        e.preventDefault();
        setSendProductData({ productName, price, src, id, description});
        Router.push("/products/" + id);
    }

    function removeProductFromFavs(e) {
        e.preventDefault();
        removeProductFromCart(id).then(() => {
            alert("Producto removido! 😞");
        })
    }

    return <DivContainer>
        <ImgStyle alt="Product Image" src={src} onClick={goToProduct} />

        <div className={className}>
            <BodyStyle className="product-name"> { productName } </BodyStyle>
            <BodyStyle className="product-price"> ${ price } </BodyStyle>
            <div className="product-trash" onClick={removeProductFromFavs}><TrashCanIcon width={35} height={35} /></div>
        </div>
    </DivContainer>
}

export const ProductCard = styled(ProductCardUI)`

    display: grid;
    border-radius: 10px;
    background-color: #97EA9F;
    grid-template-columns: 70% 0;

    .product-name {
        padding-left: 10px;
        grid-column-start: 1;
    }

    .product-price {
        margin-top: 5px;
        padding-left: 10px;
        grid-column-start: 1;
    }

    .product-fav {
        margin-top: 30px;
        grid-row-start: 1;
        grid-column-start: 3;
        justify-self: center;
    }

    @media(min-width: 450px) {

        display: grid;

        .product-name {
            max-width: 150px;
            font-size: 20px;
            padding-left: 10px;
            grid-column-start: 1;
        }

        .product-price {
            font-size: 20px;
            margin-top: 5px;
            padding-left: 10px;
            grid-column-start: 1;
        }

        .product-fav {
            margin-top: 30px;
            grid-row-start: 1;
            grid-column-start: 3;
            justify-self: center;
        }
    }
`;

export const MyProductsCard = styled(MyProductsCardUI)`

    display: grid;
    border-radius: 10px;
    background-color: violet;
    grid-template-columns: 70% 0;

    .product-name {
        padding-left: 10px;
        grid-column-start: 1;
    }

    .product-price {
        margin-top: 5px;
        padding-left: 10px;
        grid-column-start: 1;
    }

    .product-trash {
        margin-top: 30px;
        grid-row-start: 1;
        grid-column-start: 3;
        justify-self: center;
    }

    @media(min-width: 450px) {

        display: grid;
        grid-template-rows: 60px;

        .product-name {
            font-size: 20px;
            padding-left: 10px;
            grid-column-start: 1;
        }

        .product-price {
            font-size: 20px;
            margin-top: 5px;
            padding-left: 10px;
            grid-column-start: 1;
        }

        .product-trash {
            margin-top: 30px;
            grid-row-start: 1;
            grid-column-start: 3;
            justify-self: center;
        }
    }
`;
