import styled from "styled-components";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { createBuyingOrder } from "lib/api";
import { SecondaryButton } from "ui/buttons";
import { SubtitleStyle } from "ui/typhography";

const FormStyle = styled.form`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	@media (min-height: 530px) {
		min-height: 680px;
	}

	.input-address {
		padding: 7px;
		min-width: 220px;
		min-height: 30px;
		border-radius: 4px;
		border: 1px solid #000;
	}

	.more-info {
		padding: 7px;
		min-width: 220px;
		min-height: 60px;
		border-radius: 4px;
		border: 1px solid #000;
	}
`;

export function BuyingForm() {
	const router = useRouter();
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	async function submitHandler(additionalInfo) {
		
		const order = await createBuyingOrder(
			(router.query?.productId as string),
			additionalInfo,
		);
		// console.log("ESTA ES LA ORDEN: ", order);
		window.location.replace(order?.url);
	}

	return (
		<FormStyle onSubmit={handleSubmit(submitHandler)}>
			<SubtitleStyle> Dejanos información adicional : </SubtitleStyle>

			<label style={{ marginTop: 20, marginBottom: 5 }}>
				<div> Dirección de envío </div>
				<input
					placeholder='Dirección de envío...'
					className='input-address'
					{...register("address")}
					type='text'
				/>
			</label>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				{errors.address && (
					<span
						style={{
							maxWidth: 150,
							textAlign: "center",
							color: "red",
							margin: 1,
						}}>
						{" "}
						Ocurrió un error! 🚩{" "}
					</span>
				)}
			</div>

			<label style={{ marginTop: 20, marginBottom: 20 }}>
				<div> Información extra </div>
				<textarea
					style={{ marginTop: 10 }}
					className='more-info'
					{...register("additionalInfo")}
					placeholder='Información adicional?...'></textarea>
			</label>
			<div
				style={{
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
				}}>
				{errors.additionalInfo && (
					<span
						style={{
							maxWidth: 150,
							textAlign: "center",
							color: "red",
							margin: 1,
						}}>
						{" "}
						Ocurrió un error! 🚩{" "}
					</span>
				)}
			</div>

			<SecondaryButton> Enviar </SecondaryButton>
		</FormStyle>
	);
}
