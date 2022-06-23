import swal from "sweetalert";
import Router from "next/router";
import styled from "styled-components";
import { BodyStyle } from "ui/typhography/index";
import { HeartIcon, TrashCanIcon } from "ui/icons";
import {
	removeProductFromCart,
	addProductToCart,
} from "lib/api";
import { useMe } from "lib/hooks";

type CardType = {
	id: string;
	src: string;
	price: number;
	className: string;
	productName: string;
	description: string;
};

const DivContainer = styled.div`
	width: 230px;
	margin-bottom: 35px;
	border-radius: 10px;
	border: solid 2px #000;

	@media (min-width: 450px) {
		display: flex;
		width: 300px;
		align-self: center;
		flex-direction: column;
	}

	@media (max-width: 650px) {
		display: flex;
		width: 255px;
		align-self: center;
		flex-direction: column;
	}
`;

const ImgStyle = styled.img`
	/* width: 380px; */
	height: 200px;
	align-self: center;
	border-radius: 10px;

	@media (max-width: 650px) {
		width: 250px;
		height: 200px;
	}

	@media (min-width: 650px) {
		width: 296px;
		height: 250px;
	}
`;

function ProductCardUI({
	className,
	productName,
	src,
	price,
	id,
}: CardType) {

	const userData = useMe();
	function goToProduct(e) {
		e.preventDefault();
		Router.push("/products/" + id);
	}

	async function addProductToFavs(e) {
		e.preventDefault();

		if (userData) {
			await addProductToCart(id);
			await swal({
				title: "Listo!",
				text: "Producto añadido! 😎",
				icon: "success",
			});
		} else {
			swal({
				title: "Necesitas estar logueado para añadir productos a favoritos",
				icon: "error",
			});
			Router.push("/signin");
		}
	}

	return (
		<DivContainer>
			<ImgStyle alt='Product Image' src={src} onClick={goToProduct} />

			<div className={className}>
				<BodyStyle className='product-name'> {productName} </BodyStyle>
				<BodyStyle className='product-price'> ${price} </BodyStyle>
				<div className='product-fav' onClick={addProductToFavs}>
					{" "}
					<HeartIcon width={35} height={35} />{" "}
				</div>
			</div>
		</DivContainer>
	);
}

function MyProductsCardUI({
	className,
	productName,
	src,
	price,
	id,
}: CardType) {

	function goToProduct(e) {
		e.preventDefault();
		Router.push("/products/" + id);
	}

	function removeProductFromFavs(e) {
		e.preventDefault();
		removeProductFromCart(id).then(() => {
			swal({
				title: "Hecho",
				text: "Producto removido 😞",
				icon: "success",
			});
		});
	}

	return (
		<DivContainer>
			<ImgStyle alt='Product Image' src={src} onClick={goToProduct} />

			<div className={className}>
				<BodyStyle className='product-name'> {productName} </BodyStyle>
				<BodyStyle className='product-price'> ${price} </BodyStyle>
				<div className='product-trash' onClick={removeProductFromFavs}>
					<TrashCanIcon width={35} height={35} />
				</div>
			</div>
		</DivContainer>
	);
}

export const ProductCard = styled(ProductCardUI)`
	display: grid;
	border-radius: 10px;
	background-color: #97ea9f;
	grid-template-columns: 70% 0;

	.product-name {
		padding-left: 10px;
		grid-column-start: 1;
	}

	.product-price {
		margin-top: 5px;
		margin-right: 20px;
		padding-left: 20px;
		grid-column-start: 1;
	}

	.product-fav {
		margin-top: 30px;
		grid-row-start: 1;
		grid-column-start: 3;
		justify-self: center;
	}

	@media (min-width: 450px) {
		display: grid;

		.product-name {
			max-width: 150px;
			font-size: 20px;
			padding-left: 30px;
			grid-column-start: 1;
		}

		.product-price {
			font-size: 20px;
			margin-top: 5px;
			margin-right: 50px;
			grid-column-start: 1;
		}

		.product-fav {
			margin-top: 30px;
			grid-row-start: 1;
			grid-column-start: 3;
			justify-self: center;
		}
	}
`;

export const MyProductsCard = styled(MyProductsCardUI)`
	display: grid;
	border-radius: 10px;
	background-color: violet;
	grid-template-columns: 70% 0;

	.product-name {
		padding-left: 10px;
		grid-column-start: 1;
	}

	.product-price {
		margin-top: 5px;
		margin-left: 20px;
		grid-column-start: 1;
	}

	.product-trash {
		margin-top: 30px;
		grid-row-start: 1;
		grid-column-start: 3;
		justify-self: center;
	}

	@media (min-width: 450px) {
		display: grid;
		grid-template-rows: 60px;

		.product-name {
			font-size: 20px;
			padding-left: 10px;
			grid-column-start: 1;
		}

		.product-price {
			font-size: 20px;
			margin-top: 5px;
			margin-left: 50px;
			grid-column-start: 1;
		}

		.product-trash {
			margin-top: 30px;
			grid-row-start: 1;
			grid-column-start: 3;
			justify-self: center;
		}
	}
`;
