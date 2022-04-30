import type { NextPage } from 'next';
import { UserFavsComp } from "components/UserFavs/styled";
import { MainLayout } from 'components/MainLayout/mainLayout';

const UserFavs: NextPage = () => {
    return <MainLayout>
        <UserFavsComp />
    </MainLayout>
}

export default UserFavs;