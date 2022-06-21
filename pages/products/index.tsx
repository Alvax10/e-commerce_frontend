import { useState } from "react";
import { ProductsComp } from "components/products/styled";
import { SearchLayout } from "components/search-layout/index";

const ProductsPage = () => {
	const [data, setData] = useState(null);
	const getData = (queryValue) => {
		setData(queryValue);
	};

	return (
		<SearchLayout query={getData}>
			<ProductsComp query={data} />
		</SearchLayout>
	);
};

export default ProductsPage;
