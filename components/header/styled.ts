import { Header } from "./index"
import { SearchHeader } from "./searchHeader"
import styled from "styled-components";

export const MainHeader = styled(Header)`
    
    .container {
        background-color: #010101;
    }

    .mobile-menu {
        display: flex;
        padding: 5px 20px;
        align-items: center;
        justify-content: space-between;
    }

    .email-header {
        margin: 0;
        color: #fefefe;
    }

    .email {
        color: #fefefe;
    }
    
    .close-menu {
        top: 15px;
        right: 15px;
        position: fixed;
        border: solid 2px #fefefe;
    }

    @media(max-width: 600px) {
        div.desktop-menu {
            display: none;
        }

        .menu-mobile {
            gap: 10px;
            width: 100%;
            display: flex;
            height: 500px;
            position: fixed;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #010101;
        }
    }

    @media(min-width: 600px) {
        div.mobile-menu {
            display: none;
        }

        div.menu-mobile {
            display: none;
        }

        div.desktop-menu {
            display: flex;
            padding: 0px 20px;
            align-items: center;
            justify-content: space-between;
        }

        .contains-session {
            display: flex;
            align-items: center;
            flex-direction: column;
        }
    }
`;

export const SearchProductsHeader = styled(SearchHeader)`
    
    .container {
        background-color: #010101;
    }

    @media(max-width: 780px) {

        div .desktop-menu {
            display: none;
        }
    
    
        div .mobile-menu {
            display: flex;
            padding: 5px 20px;
            align-items: center;
            flex-direction: column;
            justify-content: space-between;
        }
    
        .menu-mobile {
            gap: 10px;
            display: flex;
            height: 500px;
            align-items: center;
            flex-direction: column;
            justify-content: center;
            background-color: #010101;
        }
        p.email {
            color: #fefefe;
            margin-bottom: -10px;
        }
    
        .logo-menu-container {
            width: 100%;
            display: flex;
            align-items: center;
            background-color: #010101;
            justify-content: space-between;
        }
        .buscador {
            width: 100%;
            display: flex;
            align-items: center;
            flex-direction: column;
            background-color: #010101;
        }
        .search {
            width: 80%;
            height: 30px;
            padding: 5px 10px;
            border-radius: 4px;
            margin: 25px 0 15px 0;
            background-color: #010101;
            border: solid 2px #fefefe;
        }
        
        .close-menu {
            top: 15px;
            right: 15px;
            position: fixed;
            border: solid 2px #fefefe;
        }
    }

    @media(min-width: 780px) {

        div .mobile-menu {
            display: none;
        }

        div .menu-mobile {
            display: none;
        }

        div div.desktop-menu {
            gap: 15px;
            display: flex;
            padding: 0px 20px;
            align-items: center;
            justify-content: space-between;
        }

        .buscador-desktop {
            width: 80%;
            display: flex;
            align-items: center;
            justify-content: space-evenly;
        }

        .search {
            width: 50%;
            height: 35px;
            min-width: 100px;
            max-width: 450px;
            padding: 5px 10px;
            border-radius: 4px;
            background-color: #010101;
            border: solid 2px #fefefe;
        }

        .contains-session {
            display: flex;
            align-items: center;
            flex-direction: column;
        }

        @media(min-width: 1190px) {
            .buscador-desktop {
                width: 35%;
            }

            .search {
                width: 80%;
            }
        }
    }
`;