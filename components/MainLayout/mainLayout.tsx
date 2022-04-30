import { MainFooter } from "components/footer/styled";
import { MainHeader } from "components/header/styled";

export function MainLayout({ children }) {

    return <div>
        <MainHeader />
        { children }
        <MainFooter />
    </div>
}
