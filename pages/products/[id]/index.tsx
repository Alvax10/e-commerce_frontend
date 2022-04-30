import { useState } from "react";
import { MainLayout } from "components/MainLayout/mainLayout";
import { ProductIdComp } from "components/products/productId/styled";

const productPage = () => {

    return <MainLayout>
        <ProductIdComp/>
    </MainLayout>;
}

export default productPage;
