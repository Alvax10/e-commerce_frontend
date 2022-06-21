import styled from "styled-components";
import { UserDataComponent } from "./index";

export const UserDataComp = styled(UserDataComponent)`

    display: flex;
    padding: 20px 5px;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    
    .user-form {
        display: flex;
        align-items: center;
        flex-direction: column;
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

`;