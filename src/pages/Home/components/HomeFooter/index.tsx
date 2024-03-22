import { EnvelopeSimple } from "phosphor-react";
import { Footer, FooterContainer, Waves } from "./styles";

export function HomeFooter() {
    return(
        <FooterContainer>
            <Waves>
                <span className="one" />
                <span className="two" />
            </Waves>
            <Footer>
                <span>
                    <EnvelopeSimple size={24} weight="bold"/>
                    <p>bernardo.horbach@gmail.com</p>
                </span>
            </Footer>
        </FooterContainer>
    )
}