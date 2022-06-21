import type { NextPage } from "next";
import styled from "styled-components";
import { ApxMobileLogo } from "ui/icons";
import { SubtitleStyle, TitleStyle } from "ui/typhography";
import { MainLayout } from "components/main-layout/mainLayout";

const ThanksComp = styled.div`
	display: flex;
	min-height: 350px;
	align-items: center;
	flex-direction: column;
	justify-content: center;

	@media (min-height: 700px) {
		min-height: 600px;
	}

	@media (max-width: 650px) {
		div.subtitle-container {
			margin: 0 40px;
		}
	}
`;

const ThanksPage: NextPage = () => {
	return (
		<MainLayout>
			<ThanksComp>
				<TitleStyle> Muchas gracias por tu compra! 🥺 </TitleStyle>
				<div className='subtitle-container'>
					{" "}
					<SubtitleStyle>
						{" "}
						Esperamos que disfrutes mucho tu producto!{" "}
					</SubtitleStyle>{" "}
				</div>
				<ApxMobileLogo />
			</ThanksComp>
		</MainLayout>
	);
};

export default ThanksPage;
