import { ReactNode, createContext, useReducer } from "react";
import { PortifolioReducer } from "../reducers/PortifolioReducer/Reducer";
import { changeLanguageAction } from "../reducers/PortifolioReducer/Actions";

interface PortifolioContextTypes {
    language: 'BR' | 'EN',
    changeLanguage: (language: 'BR' | 'EN') => void
}

interface PortifolioContextProps {
    children: ReactNode
}

export const PortifolioContext = createContext({} as PortifolioContextTypes)

export function PortifolioProvider({children}: PortifolioContextProps) {

    const [portifolioState, dispatch] = useReducer(
        PortifolioReducer,
        {
            language: ''
        },
        () => {
            const storedStateJSON = localStorage.getItem(
            '@licitacoes:portfolio-1.0.0',
            )

            if (storedStateJSON) {
                return JSON.parse(storedStateJSON)
            }

            return {
                language: ''
            }
        },
        )

    const { language } = portifolioState

    function changeLanguage(language: 'BR' | 'EN'){
        dispatch(changeLanguageAction(language))
    }

    return (
        <PortifolioContext.Provider value={{language, changeLanguage}}>
            {children}
        </PortifolioContext.Provider>
    )
}