import type { NextPage } from 'next';
import { HomeComp } from "components/Home/styled";
import { MainLayout } from 'components/MainLayout/mainLayout';

const Home: NextPage = () => {
  return <MainLayout>
    <HomeComp />
  </MainLayout>
}

export default Home;
