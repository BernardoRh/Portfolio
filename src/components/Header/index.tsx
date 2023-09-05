import { GearSix } from "phosphor-react";
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { ChangeLanguageButton, ChangeLanguageContent, ChangeLanguageItem, ChangeLanguageTrigger, HeaderContainer } from "./styles";
import { useContext } from "react";
import { PortifolioContext } from "../../contexts/PortifolioContext";

export function Header() {

    const { language } = useContext(PortifolioContext)

    return(
        <HeaderContainer>
            <ChangeLanguageButton>
                <ChangeLanguageTrigger asChild>
                    <button className="IconButton" aria-label="Customise options">
                        <GearSix size={64} weight="fill"/>
                    </button>
                </ChangeLanguageTrigger>
                <DropdownMenu.Portal>
                    <ChangeLanguageContent>
                        {/* selectedLanguage={}> */}
                        <ChangeLanguageItem selected={language == 'BR' ? true : false} content="BR">
                            <button>BR</button>
                        </ChangeLanguageItem>
                        <ChangeLanguageItem selected={language == 'EN' ? true : false} content="EN">
                            <button>EN</button>
                        </ChangeLanguageItem>
                        <span></span>
                    </ChangeLanguageContent>
                </DropdownMenu.Portal>
            </ChangeLanguageButton>
        </HeaderContainer>
    )
}