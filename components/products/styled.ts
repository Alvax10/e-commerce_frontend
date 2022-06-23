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

        .body {
            max-width: 500px;
        }
    }

    @media(min-width: 500px) {

        .container {
            text-align: center;
        }

        .productos-destacados p.ver-mas {
            font-size: 40px;
        }
    }
`;