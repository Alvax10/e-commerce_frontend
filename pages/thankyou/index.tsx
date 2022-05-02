import  type { NextPage } from 'next';
import styled from "styled-components";
import { MainLayout } from "components/MainLayout/mainLayout";
import { SubtitleStyle, TitleStyle } from 'ui/typhography';
import { ApxMobileLogo } from 'ui/icons';

const ThanksComp = styled.div`

    display: flex;
    min-height: 350px;
    align-items: center;
    flex-direction: column;
    justify-content: center;

    @media(min-height: 700px) {
        min-height: 600px;
    }

    @media(max-width: 650px) {

        div {
            margin: 0 40px;
        }
    }

`;

const ThanksPage: NextPage = () => {
    
    return <MainLayout>
        <ThanksComp>
            <TitleStyle> Muchas gracias por tu compra! 🥺 </TitleStyle>
            <div> <SubtitleStyle> Esperamos que disfrutes mucho tu producto! </SubtitleStyle> </div>
            <ApxMobileLogo />
        </ThanksComp>
    </MainLayout>
}

export default ThanksPage;