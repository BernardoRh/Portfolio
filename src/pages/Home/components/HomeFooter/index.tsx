import { Footer, FooterContainer, Waves } from "./styles";

export function HomeFooter() {
    return(
        <FooterContainer>
            <Waves>
                <span className="one" />
                <span className="two" />
            </Waves>
            <Footer>
                <p>bernardo.</p>
            </Footer>
        </FooterContainer>
    )
}