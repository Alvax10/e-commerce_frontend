import Router from "next/router";
import { useEffect, useState } from "react";
import { SecondaryButton } from "ui/buttons";
import { useGetProductsCart } from "lib/hooks";
import { MyProductsCard } from "components/card";
import { BodyStyle, TitleStyle } from "ui/typhography/index";

export function UserFavComponent({ className }) {
	const productsFromCart = useGetProductsCart();
	const [cart, setCart] = useState(null as any);

	useEffect(() => {
		if (productsFromCart?.cart.length >= 1) {
			setCart(productsFromCart.cart);
		} else {
			setCart(null);
		}
	}, [productsFromCart]);

	function goToProducts(e) {
		e.preventDefault();
		Router.push("/products");
	}

	return cart ? (
		<div className={className}>
			<div className='product-container'>
				<TitleStyle> Tus favoritos! </TitleStyle>
				{cart.map((product) => {
					// console.log(product);
					return (
						<MyProductsCard
							id={product.id}
							description={product.description}
							key={product.id}
							src={product.image[0].url}
							productName={product.title}
							price={product["price"]}
						/>
					);
				})}
			</div>
		</div>
	) : (
		<div className={className}>
			<div
				style={{
					display: "flex",
					alignItems: "center",
					flexDirection: "column",
				}}>
				<TitleStyle> No tienes favoritos 😦 </TitleStyle>
				<BodyStyle>
					{" "}
					Quieres tener favoritos? Añade productos!{" "}
				</BodyStyle>
				<div className='button-container' onClick={goToProducts}>
					<SecondaryButton> Agergar Productos </SecondaryButton>
				</div>
			</div>
		</div>
	);
}
