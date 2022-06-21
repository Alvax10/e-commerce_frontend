import { useState } from "react";
import type { NextPage } from "next";
import { SearchComponent } from "components/search-comp/index";
import { SearchLayout } from "components/search-layout/index";

const Home: NextPage = () => {
	const [dataFromQuery, setDdataFromQuery] = useState(null);

	const getDataFromQuery = (queryValue) => {
		setDdataFromQuery(queryValue);
	};

	return (
		<SearchLayout query={getDataFromQuery}>
			<SearchComponent query={dataFromQuery} />
		</SearchLayout>
	);
};

export default Home;
