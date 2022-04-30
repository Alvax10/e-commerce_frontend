import type { NextPage } from 'next';
import { SearchComponent } from "components/SearchComp/index";
import { SearchLayout } from "components/SearchLayout/index";
import { useState } from 'react';

const Home: NextPage = () => {
    
    const [dataFromQuery, setDdataFromQuery] = useState(null);

    const getDataFromQuery = (queryValue) => {
        setDdataFromQuery(queryValue);
    }

    return <SearchLayout query={getDataFromQuery}>
        <SearchComponent query={dataFromQuery} />
    </SearchLayout>
}

export default Home;