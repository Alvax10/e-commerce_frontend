import { MainFooter } from "components/footer/styled";
import { SearchProductsHeader } from "components/header/styled";

export function SearchLayout({ children }) {

	return (
		<div>
			<SearchProductsHeader />
			{children}
			<MainFooter />
		</div>
	);
}
