import type { NextPage } from "next";
import { SignInComp } from "components/signin/styled";
import { MainLayout } from "components/main-layout/mainLayout";

const SignInPage: NextPage = () => {
	return (
		<MainLayout>
			<SignInComp />
		</MainLayout>
	);
};

export default SignInPage;
