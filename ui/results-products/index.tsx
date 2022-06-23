import styled from "styled-components";
import { ProductCard } from "components/card";
import { SubtitleStyle } from "ui/typhography";

const ProductsStyle = styled.div`
	padding: 10;
    display: "flex";
    flex-direction: "column";

    .product-container {
        display: flex;
        align-items: center;
        flex-direction: column;
    }

    @media(min-width: 500px) {

        .product-container {
            display: grid;
            align-items: center;
            justify-items: center;
            grid-template-columns: repeat(auto-fit, minmax(390px, 1fr));
        }
    }
`;

export function ProductResults({ products }) {

    return <ProductsStyle>
        
        <div className='product-container'>
			{products?.map((product) => {
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

    </ProductsStyle>
}


export function ResultsofPagination({ data }) {
    return <ProductsStyle>

        <SubtitleStyle>
			Resultados: {data?.productsLength} de {data?.paginationFromQuery?.total}
		</SubtitleStyle>

    </ProductsStyle>
}