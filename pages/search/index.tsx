import type { NextPage } from "next";
import { SearchComponent } from "components/search-comp/index";
import { SearchLayout } from "components/search-layout/index";

const Home: NextPage = () => {

	return (
		<SearchLayout>
			<SearchComponent />
		</SearchLayout>
	);
};

export default Home;
