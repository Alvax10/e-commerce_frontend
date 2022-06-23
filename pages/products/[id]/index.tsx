import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { MainLayout } from "components/main-layout/mainLayout";
import { ProductIdComponent } from "components/product-detail/prodcuctId";

const ProductPage = () => {

	const router = useRouter();
	const [ productId, setProductId ] = useState(null as any);
	useEffect(() => {
		const id = router.query.id;
		setProductId(id);
	}, [router.query.id]);

	return (
		<MainLayout >
			<ProductIdComponent productId={productId} />
		</MainLayout>
	);
};

export default ProductPage;
