import styled from "styled-components";
import { useEffect, useState } from "react";
import { getProductsByQuery } from "lib/api";
import Router, { useRouter } from "next/router";
import { BodyStyle } from "ui/typhography/index";
import { ProductResults, ResultsofPagination } from "ui/results-products";

const Styles = styled.div`
	@media (max-width: 500px) {
		.product-container {
			display: flex;
			align-items: center;
			flex-direction: column;
		}

		.body {
			max-width: 500px;
		}
	}

	@media (min-width: 500px) {
		.product-container {
			display: grid;
			align-items: center;
			justify-items: center;
			grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
		}

		.productos-destacados p.ver-mas {
			font-size: 40px;
		}
	}
`;

export function SearchComponent() {

	const router = useRouter();
	const [paginationFromQuery, setpaginationFromQuery] = useState(null as any);
	const [productsByQuery, setProductsByQuery] = useState(null as any);
	const [queryValue, setQueryValue] = useState(null as any);
	const [productsLength, setProductsLength] = useState(0);
	const [nextPage, setNextPage] = useState(0);
	const query = router.query?.q;
	
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
		<Styles>
			{productsByQuery?.length > 0 && productsByQuery?.length != 0 &&
			paginationFromQuery !== null &&
			paginationFromQuery?.total == productsLength ? (
				<div
					style={{
						display: "flex",
						padding: 10,
						flexDirection: "column",
					}}>
					<ResultsofPagination data={{ productsLength, paginationFromQuery }} />
					<ProductResults products={productsByQuery} />

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
			) : productsByQuery?.length > 0 ? (
				<div
					className='body'
					style={{
						display: "flex",
						padding: 10,
						flexDirection: "column",
					}}>
					<ResultsofPagination data={{ productsLength, paginationFromQuery }} />
					<ProductResults products={productsByQuery} />

					<a
						href='false'
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

			: (
				<div
					style={{
						height: 600,
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
					}}>
					<BodyStyle> No buscaste productos todavía! </BodyStyle>
				</div>
			)}
		</Styles>
	);
}
