import styled from "styled-components";
import { HomeComponent } from "./index";

export const HomeComp = styled(HomeComponent)`

    div.main-body {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    div.productos-destacados {
        display: flex;
        padding: 10px;
        min-height: 300px;
        flex-direction: column;
        background-color: #91E5F6;
    }

    div.product-container {
        display: flex;
        align-items: center;
        justify-items: center;
        flex-direction: column;
    }

    @media(min-width: 500px) {

        div.product-container {
            display: grid;
            align-items: center;
            justify-items: center;
            grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
        }
    }
`;