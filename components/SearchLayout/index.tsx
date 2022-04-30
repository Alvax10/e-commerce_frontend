import { MainFooter } from "components/footer/styled";
import { SearchProductsHeader } from "components/header/styled";

export function SearchLayout({ children, query }) {

    const getDataFromQuery = (queryValue) => {
        query(queryValue);
    }

    return <div>
        <SearchProductsHeader queryValue={getDataFromQuery} />
            { children }
        <MainFooter />
    </div>
}