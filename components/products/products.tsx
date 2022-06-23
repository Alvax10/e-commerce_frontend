import { useProducts } from "lib/hooks";
import { useEffect, useState } from "react";
import { getProductsByQuery } from "lib/api";
import Router, { useRouter } from "next/router";
import { SubtitleStyle, BodyStyle } from "ui/typhography/index";
import { ProductResults, ResultsofPagination } from "ui/results-products";

export function Products({ className }) {

	const data = useProducts();
	const router = useRouter();
	const [paginationFromQuery, setpaginationFromQuery] = useState(null as any);
	const [productsByQuery, setProductsByQuery] = useState(null as any);
	const [queryValue, setQueryValue] = useState(null as any);
	const [productsLength, setProductsLength] = useState(0);
	const [nextPage, setNextPage] = useState(0);
	const query = router.query?.q;

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
					<ResultsofPagination data={{ productsLength, paginationFromQuery }} />
					<ProductResults products={allProducts} />

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
					<ResultsofPagination data={{ productsLength, paginationFromQuery }} />
					<ProductResults products={allProducts} />

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
						<ResultsofPagination data={{ productsLength, paginationFromQuery }} />
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
					<ProductResults products={allProducts} />
				</div>
			)}
		</div>
	);
}
