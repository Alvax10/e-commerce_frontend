import Link from "next/link";
import { useState } from "react";
import { HeartIcon } from "ui/icons/index";
import { ProductCard } from "components/card";
import { MyPrimaryButton } from "ui/buttons/index";
import { BodyStyle, SubtitleStyle, TitleStyle } from "ui/typhography/index";

export function HomeComponent({ className }) {
	const [productosDestacados, setProductosDestacados] = useState(null as any);

	return (
		<div className={className}>
			{productosDestacados ? (
				<div>
					<div className='main-body'>
						<TitleStyle> El mejor e-commerce </TitleStyle>
						<SubtitleStyle>
							{" "}
							Mirá todos los productos!{" "}
						</SubtitleStyle>
						<Link href='/products'>
							<div style={{ marginBottom: 35 }}>
								<MyPrimaryButton>
									{" "}
									Ver productos{" "}
								</MyPrimaryButton>
							</div>
						</Link>
					</div>

					<div className='productos-destacados'>
						<TitleStyle> Productos destacados! </TitleStyle>
						<div className='product-container'>
							{productosDestacados?.map((product) => {
								// console.log(product);
								return (
									<ProductCard
										id={product.objectID}
										description={product.Description}
										key={product.objectID}
										icon={HeartIcon}
										src={product.Images[0].url}
										productName={product.Name}
										price={product["Unit cost"]}
									/>
								);
							})}
						</div>
					</div>
				</div>
			) : (
				<div>
					<div className='main-body'>
						<TitleStyle> El mejor e-commerce </TitleStyle>
						<SubtitleStyle>
							{" "}
							Mirá todos los productos!{" "}
						</SubtitleStyle>
						<Link href='/products'>
							<div style={{ marginBottom: 35 }}>
								<MyPrimaryButton>
									{" "}
									Ver productos{" "}
								</MyPrimaryButton>
							</div>
						</Link>
					</div>

					<div className='productos-destacados'>
						<TitleStyle> Productos destacados! </TitleStyle>
						<BodyStyle> No hay productos destacados 😢 </BodyStyle>
					</div>
				</div>
			)}
		</div>
	);
}
