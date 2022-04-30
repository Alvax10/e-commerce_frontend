import { Footer } from "./index"
import styled from "styled-components";

export const MainFooter = styled(Footer)`

    .desktop-footer {
        display: none;
    }

    div.mobile-footer {
        width: 100%;
        display: flex;
        padding: 25px 20px;
        flex-direction: column;
        justify-content: flex-start;
        background-color: #010101;
    }

    .image-container {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: space-between;
    }

    .redes {
        display: flex;
        flex-direction: column;
    }

    @media(min-width: 500px) {
        div.mobile-footer {
            display: none;
        }

        .desktop-footer {
            gap: 5px;
            width: 100%;
            display: flex;
            padding: 20px 25px;
            flex-direction: column;
            justify-content: flex-start;
            background-color: #010101;
        }

        .container {
            display: flex;
            justify-content: space-between;
        }

        .image-container {
            display: flex;
            flex-direction: row-reverse;
            justify-content: space-between;
        }
    }

`;