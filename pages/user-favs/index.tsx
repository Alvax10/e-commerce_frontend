import type { NextPage } from "next";
import { UserFavsComp } from "components/user-favs/styled";
import { MainLayout } from "components/main-layout/mainLayout";

const UserFavs: NextPage = () => {
	return (
		<MainLayout>
			<UserFavsComp />
		</MainLayout>
	);
};

export default UserFavs;
