import swal from "sweetalert";
import Image from "next/image";
import Router from "next/router";
import { useMe } from "lib/hooks";
import { useProduct } from "lib/hooks";
import { ProductIdComp } from "./styled";
import { PrimaryButton } from "ui/buttons/index";
import { BodyStyle, SubtitleStyle } from "ui/typhography/index";

export function ProductIdComponent({ productId }) {
	const getProductData = useProduct(productId);
	const userData = useMe();

	async function createOrder(e) {
		e.preventDefault();

		if (userData) {
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

	return <ProductIdComp>
			
			<Image className='product-image'
				src={getProductData?.image[0]?.url}
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

	</ProductIdComp>
}
