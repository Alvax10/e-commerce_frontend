import type { NextPage } from "next";
import { HomeComp } from "components/home/styled";
import { MainLayout } from "components/main-layout/mainLayout";

const Home: NextPage = () => {
	return (
		<MainLayout>
			<HomeComp />
		</MainLayout>
	);
};

export default Home;
