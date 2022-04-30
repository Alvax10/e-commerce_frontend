import type { NextPage } from 'next';
import { TextField } from "ui/textField/index";
import { TitleStyle, SubtitleStyle, BodyStyle } from "ui/typhography/index";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "ui/buttons/index";
import { UserIcon, HeartIcon, HomeIcon, ApxMobileLogo, ApxDesktopLogo, CloseXMenu, BurgerMenu } from "ui/icons/index";
import { ProductCard,MyProductsCard } from 'components/card';
import { MainHeader, SearchProductsHeader } from 'components/header/styled';
import { MainFooter } from 'components/footer/styled';

const UI: NextPage = () => {
    return <div>
        <MainHeader />
        <PrimaryButton margin={5 + "px"} width={300+ "px"} height={40 + "px"}> Buscar </PrimaryButton>
        <SecondaryButton margin={5 + "px"} width={300+ "px"} height={40 + "px"}> Buscar </SecondaryButton>
        <TertiaryButton margin={5 + "px"} width={300+ "px"} height={40 + "px"}> Ingresar </TertiaryButton>
        <UserIcon width={30} height={30} />
        <HeartIcon width={30} height={30} />
        <HomeIcon width={30} height={30} />
        {/* <ApxDesktopLogo /> */}
        <ApxMobileLogo />
        <TextField placeholder="lol" name="lol" type="text" label="Email" /> 
        <TitleStyle> Este es un título </TitleStyle>
        <SubtitleStyle> Este es un subtítulo </SubtitleStyle>
        <BodyStyle> Este es un body </BodyStyle>

        <CloseXMenu width={30} height={30} />
        <BurgerMenu width={30} height={20} />

        <SearchProductsHeader />

        <ProductCard src="https://www.semana.com/resizer/2gGwUVC5DVY4r33PoHeYGDcpm_4=/370x208/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg" productName="Tu vieja" price={123198731982} />
        <MyProductsCard src="https://www.semana.com/resizer/2gGwUVC5DVY4r33PoHeYGDcpm_4=/370x208/filters:format(jpg):quality(50)/cloudfront-us-east-1.images.arcpublishing.com/semana/V3EVP6ZUEZFY7AIGESM76I43GE.jpg" productName="Tu vieja" price={123198731982} />

        <MainFooter />
    </div>
}

export default UI;