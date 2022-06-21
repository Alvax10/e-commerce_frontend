import { NextPage } from "next";
import { BuyingForm } from "components/buying-form/index";
import { MainLayout } from "components/main-layout/mainLayout";

const CheckoutPage: NextPage = () => {
	return (
		<MainLayout>
			<BuyingForm />
		</MainLayout>
	);
};

export default CheckoutPage;
