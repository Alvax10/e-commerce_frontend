import { Products } from "./products";
import styled from "styled-components";

export const ProductsComp = styled(Products)`
    min-height: 600px;

    @media(max-width: 500px) {

        .container {
            display: flex;
            text-align: center;
            align-items: center;
            flex-direction: column;
        }

        .product-container {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        .body {
            max-width: 500px;
        }
    }

    @media(min-width: 500px) {

        .container {
            text-align: center;
        }

        .product-container {
            display: grid;
            align-items: center;
            justify-items: center;
            grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
        }

        .productos-destacados p.ver-mas {
            font-size: 40px;
        }
    }
`;