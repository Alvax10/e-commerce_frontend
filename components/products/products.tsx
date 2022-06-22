import Router from "next/router";
import { useProducts } from "lib/hooks";
import { useEffect, useState } from "react";
import { getProductsByQuery } from "lib/api";
import { ProductCard } from "components/card";
import { SubtitleStyle, BodyStyle } from "ui/typhography/index";

export function Products({ className, query }) {
	const data = useProducts();
	const [paginationFromQuery, setpaginationFromQuery] = useState(null as any);
	const [productsByQuery, setProductsByQuery] = useState(null as any);
	const [productsLength, setProductsLength] = useState(0);
	const [queryValue, setQueryValue] = useState(null);
	const [nextPage, setNextPage] = useState(0);

	const allProducts = data && !queryValue ? data?.results : null;

	useEffect(() => {
		query && query != queryValue ? setQueryValue(query) : queryValue;
	}, [query]);

	useEffect(() => {
		if (queryValue && nextPage == 0) {
			setProductsLength(0);
			const limit = paginationFromQuery?.limit
				? paginationFromQuery?.limit
				: 0;
			const hayOffset = paginationFromQuery?.offset;
			const offset = hayOffset ? hayOffset : 0;

			getProductsByQuery(queryValue, limit, offset).then(
				(dataFromAPI) => {
					setProductsByQuery(dataFromAPI?.results);

					if (dataFromAPI?.results.length < limit) {
						setpaginationFromQuery({
							limit,
							offset,
							total: dataFromAPI?.results.length,
						});
						setProductsLength(dataFromAPI?.results.length);
					} else {
						setpaginationFromQuery(dataFromAPI?.pagination);
						setProductsLength(dataFromAPI?.results.length);
					}
				},
			);
		}

		if (queryValue && nextPage != 0) {
			const limit = paginationFromQuery?.limit
				? paginationFromQuery?.limit
				: 0;
			const hayLimit = paginationFromQuery?.limit;
			const offsetEs0 = paginationFromQuery?.offset == 0;
			const offset = offsetEs0 && hayLimit ? limit : 0;

			getProductsByQuery(queryValue, limit, offset).then(
				(dataFromAPI) => {
					setProductsByQuery(dataFromAPI?.results);
					setpaginationFromQuery(dataFromAPI?.pagination);
					setProductsLength(
						productsLength + dataFromAPI?.results.length,
					);
				},
			);
		}
	}, [nextPage, queryValue]);

	function previousPage(e) {
		e.preventDefault();
		setNextPage(0);
		Router.push("/products#top");
	}

	function nextProductsPage(e) {
		e.preventDefault();
		let times = 1;
		var sumaTimes = (times = +1);
		setNextPage(sumaTimes);
		Router.push("/products#top");
	}

	return (
		<div className={className} id='top'>
			{productsByQuery && productsLength == paginationFromQuery?.total && productsByQuery?.length != 0 ? (
				<div
					style={{
						display: "flex",
						padding: 10,
						flexDirection: "column",
					}}>
					<SubtitleStyle>
						{" "}
						Resultados: {productsLength} de{" "}
						{paginationFromQuery?.total}{" "}
					</SubtitleStyle>
					<div className='product-container'>
						{productsByQuery?.map((product) => {
							return (
								<ProductCard
									id={product.objectID}
									description={product.Description}
									key={product.objectID}
									src={product.Images[0].url}
									productName={product.Name}
									price={product["unit_price"]}
								/>
							);
						})}
					</div>

					<a
						href='false'
						onClick={previousPage}
						style={{
							color: "violet",
							fontSize: 30,
							alignSelf: "center",
							textDecoration: "underline",
							margin: 20,
						}}>
						{" "}
						Ver menos ↩{" "}
					</a>
				</div>
			) : productsByQuery &&
			productsLength <= paginationFromQuery?.total && productsByQuery?.length != 0 ? (
				<div
					style={{
						display: "flex",
						padding: 10,
						flexDirection: "column",
					}}>
					<SubtitleStyle>
						{" "}
						Resultados: {productsLength} de{" "}
						{paginationFromQuery?.total}{" "}
					</SubtitleStyle>

					<div className='product-container'>
						{productsByQuery?.map((product) => {
							return (
								<ProductCard
									id={product.objectID}
									description={product.Description}
									key={product.objectID}
									src={product.Images[0].url}
									productName={product.Name}
									price={product["unit_price"]}
								/>
							);
						})}
					</div>

					<a
						onClick={nextProductsPage}
						style={{
							color: "violet",
							fontSize: 30,
							alignSelf: "center",
							textDecoration: "underline",
							margin: 20,
						}}>
						{" "}
						Ver más ↪{" "}
					</a>
				</div>
			)
			
			: productsByQuery?.length == 0 ? (

				<div
					style={{
						height: 600,
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
					}}>
						<SubtitleStyle alignSelf='center'>
							{productsLength} resultados de:{" "}
							{paginationFromQuery?.total}{" "}
						</SubtitleStyle>

						<BodyStyle> No hay productos relacionados a tu búsqueda 😞 </BodyStyle>
				</div>
			)

			: 
			(
				<div className='container'>
					<SubtitleStyle>
						{" "}
						Buscá el producto que tanto querés!{" "}
					</SubtitleStyle>

					<div className='product-container'>
						{allProducts?.map((product) => {
							return (
								<ProductCard
									id={product.objectID}
									description={product.Description}
									key={product.objectID}
									src={product.Images[0].url}
									alt='product image'
									productName={product.Name}
									price={product["unit_price"]}
								/>
							);
						})}
					</div>
				</div>
			)}
		</div>
	);
}
