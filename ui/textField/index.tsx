import styled from "styled-components";

const Input = styled.input`
	padding: 5px 10px;
	border-radius: 4px;
	border: solid 1px black;
`;

export function TextField({ label, type, name, placeholder }) {
	return (
		<label>
			<div>{label}</div>
			<Input
				placeholder={placeholder}
				type={type}
				name={name}
				style={{ marginTop: 10 }}
			/>
		</label>
	);
}
