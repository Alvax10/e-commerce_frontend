import styled from "styled-components";
import { SignInComponent } from "./index";

export const SignInComp = styled(SignInComponent)`

    padding: 20px 5px;

    @media(min-height: 750px) {
        display: flex;
        min-height: 530px;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 10px 5px 50px 5px;
    }

    .signin-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        padding: 10px 5px 50px 5px;
    }

    .label {
        margin-bottom: 15px;
    }

    .input {
        width: auto;
        height: 28px;
        padding: 5px;
        border-radius: 5px;
        border: 1px solid #000;
    }

    .code-form {
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: 10px 5px 50px 5px;
    }

`;