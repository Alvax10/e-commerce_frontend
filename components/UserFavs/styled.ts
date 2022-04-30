import styled from "styled-components";
import { UserFavComponent } from "./index";

export const UserFavsComp = styled(UserFavComponent)`

    display: flex;
    min-height: 300px;
    align-items: center;
    flex-direction: column;

    div.productos-destacados {
        padding: 10px;
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

    @media(min-height: 700px), (min-width: 400px) {
        min-height: 650px;

        .button-container {
            justify-content: center;
        }
    }
`;