import  type { NextPage } from 'next';
import { SignInComp } from "components/Signin/styled";
import { MainLayout } from "components/MainLayout/mainLayout";

const SignInPage: NextPage = () => {
    
    return <MainLayout>
        <SignInComp />
    </MainLayout>
}

export default SignInPage;
