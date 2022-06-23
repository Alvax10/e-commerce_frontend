import styled from "styled-components";

export const ProductIdComp = styled.div`

    @media(max-width: 600px) {
        display: flex;
        padding: 30px 10px;
        align-items: center;
        flex-direction: column;
        
        .product-name {
            text-align: center;
        }

        .product-image {
            max-width: 270px;
            max-height: 208px;
        }

        .description {
            max-width: 350px;
            text-align: center;
        }
    }

    @media(min-width: 600px) {

        display: grid;
        margin: 40px 0;
        align-items: center;
        justify-content: center;
        grid-template-rows: 300px 200px;
        grid-template-columns: 300px 250px;
        
        .product-name {
            grid-row-start: 1;
            text-align: center;
            margin-bottom: 100px;
            grid-column-start: 2;
            align-self: flex-start;
        }

        .price {
            margin-top: 60px;
            grid-row-start: 1;
            justify-self: center;
            grid-column-start: 2;
            align-self: flex-start;
        }

        .product-image {
            max-width: 270px;
            margin-top: 160px;
            max-height: 208px;
            grid-row-start: 1;
            align-self: center;
            grid-column-start: 1;
        }

        .button {
            grid-row-start: 1;
            align-self: flex-end;
            margin-bottom: 140px;
            grid-column-start: 2;
        }

        .description {
            max-width: 350px;
            max-height: 400px;
            grid-row-start: 2;
            align-self: flex-end;
            grid-column-start: 2;
        }
    }
`;