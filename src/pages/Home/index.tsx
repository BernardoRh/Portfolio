import { BodyContainer } from "./components/HomeBody/styles";
import { HomeFooter } from "./components/HomeFooter";
import { HomeHeader } from "./components/HomeHeader";

export function Home() {
    return(
        <>
            <HomeHeader />
            <BodyContainer />
            <HomeFooter />
        </>
    )
}