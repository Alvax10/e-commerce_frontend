import swal from "sweetalert";
import Router from "next/router";
import { useEffect } from "react";
import { getSavedToken } from "lib/api";
import { useGetProduct } from "lib/hooks";
import { PrimaryButton, TertiaryButton } from "ui/buttons/index";
import { BodyStyle, SubtitleStyle, TitleStyle } from "ui/typhography/index";

export function ProductIdComponent({ className }) {
	const [getProductData, setGetProductData] = useGetProduct();
	let token;

	useEffect(() => {
		const savedToken = getSavedToken();
		token = savedToken;
	});

	async function createOrder(e) {
		e.preventDefault();

		if (token) {
			Router.push("/checkout/" + getProductData.id);
		} else {
			swal({
				title: "Necesitas estar logueado para comprar productos",
				icon: "error",
			}).then(() => {
				Router.push("/signin");
			});
		}
	}

	function goToProducts(e) {
		e.preventDefault();
		Router.push("/products");
	}

	useEffect(() => {
		// console.log("EN EL USEEFFECT");
		localStorage.removeItem("recoil-persist");
	}, []);

	return getProductData ? (
		<div className={className}>
			<img
				className='product-image'
				src={getProductData?.src}
				alt='products image'
			/>
			<SubtitleStyle className='product-name'>
				{" "}
				{getProductData?.productName}{" "}
			</SubtitleStyle>
			<SubtitleStyle className='price'>
				{" "}
				${getProductData?.price}{" "}
			</SubtitleStyle>
			<div onClick={createOrder} className='button'>
				{" "}
				<PrimaryButton> Comprar </PrimaryButton>{" "}
			</div>
			<BodyStyle className='description'>
				{" "}
				{getProductData?.description}{" "}
			</BodyStyle>
		</div>
	) : (
		<div
			style={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				minHeight: 600,
				justifyContent: "center",
			}}>
			<TitleStyle> El producto se perdió </TitleStyle>
			<div onClick={goToProducts}>
				{" "}
				<TertiaryButton> Volver a productos </TertiaryButton>{" "}
			</div>
		</div>
	);
}
