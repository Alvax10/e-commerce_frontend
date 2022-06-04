import TrashCanSVG from "./trash.svg";
import styled from "styled-components";
import UserSvg from "ui/icons/user.svg";
import HomeSvg from "ui/icons/home.svg";
import BurgerMenuSVG from "./burger.svg";
import HeartSvg from "ui/icons/heart.svg";
import CROSS from "ui/icons/white-cross.svg";
import ApxLogoMobile from "./logo-mobile.svg";
import ApxLogoDesktop from "./logo-desktop.svg";
import Router from "next/router";

export function UserSVG({ className, width, height, color }) {
    return <UserSvg style={{ width: width, height: height, stroke: color }} className={className} />
}

export const UserIcon = styled(UserSVG)`
    width: ${ (props) => props?.width };
    height: ${ (props) => props?.height };
    stroke: ${ (props) => props?.color };
`;

export function HomeSVG({ className, width, height, color }) {
    return <HomeSvg style={{ width: width, height: height, stroke: color }} className={className} />
}

export const HomeIcon = styled(HomeSVG)`
    width: ${ (props) => props.width + "px" };
    height: ${ (props) => props.height + "px" };
    stroke: ${ (props) => props?.color };
`;

export function HeartSVG({ className, width, height, color }) {
    return <HeartSvg style={{ width: width, height: height, stroke: color }} className={className} />
}

export const HeartIcon = styled(HeartSVG)`
    stroke: red;
    width: ${ (props) => props.width + "px" };
    height: ${ (props) => props.height + "px" };
    stroke: ${ (props) => props?.color };
`;

export function ApxMobileLogo() {
    function goToHome(e) {
        e.preventDefault();
        Router.push("/");
    }

    return <ApxLogoMobile onClick={goToHome} style={{ borderRadius: 15, cursor: "pointer" }} alt="Apx Logo" />
}

export function ApxDesktopLogo() {
    function goToHome(e) {
        e.preventDefault();
        Router.push("/");
    }

    return <ApxLogoDesktop onClick={goToHome} style={{ borderRadius: 70, cursor: "pointer" }} alt="Apx Logo" />
}

function BurgerMenuImage({ className }) {
    return <BurgerMenuSVG className={className} />
}

export const BurgerMenu = styled(BurgerMenuImage)`
    width: ${ (props) => props.width + "px" };
    height: ${ (props) => props.height + "px" };
`;

function CloseXMenuImage({ className }) {
    return <CROSS className={className} />
}

export const CloseXMenu = styled(CloseXMenuImage)`
    width: ${ (props) => props.width + "px" };
    height: ${ (props) => props.height + "px" };
`;

function TrashCan({ className }) {
    return <TrashCanSVG className={className} />
}

export const TrashCanIcon = styled(TrashCan)`
    width: ${ (props) => props.width + "px" };
    height: ${ (props) => props.height + "px" };
`;
