import { NextPage } from "next";
import { BuyingForm } from "components/BuyingForm/index";
import { MainLayout } from "components/MainLayout/mainLayout";

const CheckoutPage: NextPage = () => {
    return <MainLayout>
        <BuyingForm />
    </MainLayout>
}

export default CheckoutPage;