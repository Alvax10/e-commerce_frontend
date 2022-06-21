import styled from "styled-components";

function Button({ children, className }) {
	return <button className={className}> {children} </button>;
}

export const PrimaryButton = styled(Button)`
	width: 250px;
	height: 50px;
	margin: 5px;
	border: none;
	cursor: pointer;
	border-radius: 8px;
	background-color: #4f7cac;
`;

export const SecondaryButton = styled(PrimaryButton)`
	margin: 10px;
	background-color: #ffc700;
`;

export const TertiaryButton = styled(PrimaryButton)`
	margin: 5px;
	height: 45px;
	background-color: #e75a7c;
`;

export const MyPrimaryButton = styled(PrimaryButton)`
	margin: 15px;
`;

export const MySecondaryButton = styled(SecondaryButton)`
	width: 80%;
	margin: 10px;
	height: 30px;
`;

export const MyTertiaryButton = styled(TertiaryButton)`
	width: 180px;
	margin: 10px;
	height: 48px;
`;
