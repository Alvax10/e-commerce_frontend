import type { NextPage } from "next";
import { MainLayout } from "components/main-layout/mainLayout";
import { UserDataComp } from "components/user-profile/styled";

const UserPage: NextPage = () => {
	return (
		<MainLayout>
			<UserDataComp />
		</MainLayout>
	);
};

export default UserPage;
