import styled from "styled-components";

export function Title({ children, className }) {
	return <h1 className={className}> {children} </h1>;
}

export const TitleStyle = styled(Title)`
	@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
	font-size: 32px;
	font-weight: 700;
	text-align: center;
	padding: 0 20px;
	font-family: "Inter", sans-serif;
`;

export function Subtitle({ children, className }) {
	return <h2 className={className}> {children} </h2>;
}

export const SubtitleStyle = styled(Subtitle)`
	@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
	font-size: 24px;
	font-family: "Inter", sans-serif;
	color: ${(props): string => props?.color};
	align-self: ${(props) => props?.alignSelf};
`;

export function Body({ children, className }) {
	return <p className={className}> {children} </p>;
}

export const BodyStyle = styled(Body)`
	@import url("https://fonts.googleapis.com/css2?family=Inter&display=swap");
	font-size: 16px;
	font-family: "Inter", sans-serif;
	color: ${(props): string => props?.color};
`;
