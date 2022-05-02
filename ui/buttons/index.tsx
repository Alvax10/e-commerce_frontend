import styled from "styled-components";

function Button({ children, className }) {
    return <button className={className}> { children } </button>
}

export const PrimaryButton = styled(Button)`
    border: none;
    cursor: pointer;
    border-radius: 8px;
    background-color: #4F7CAC ; 
    width: ${ (props) => props?.width };
    height: ${ (props) => props?.height };
    margin: ${ (props) => props?.margin };
`;

export const SecondaryButton = styled(PrimaryButton)`
    background-color: #FFC700;
`

export const TertiaryButton = styled(PrimaryButton)`
    background-color: #E75A7C;
`;
