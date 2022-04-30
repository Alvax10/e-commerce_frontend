// import { useMe } from "lib/hooks"; 
import  type { NextPage } from 'next';
import { MainLayout } from 'components/MainLayout/mainLayout';
import { UserDataComp } from "components/UserProfile/styled";

const UserPage: NextPage = () => {
    // const myData = useMe();
    return <MainLayout>        
        <UserDataComp />
    </MainLayout>
}

export default UserPage;
