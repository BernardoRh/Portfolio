import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { styled } from 'styled-components';

export const HeaderWrapper = styled.div`
    position: relative;
`

export const HeaderContainer = styled.header`
    position: absolute;
    top: 4rem;
    right: 4rem;
    background: transparent;
    width: 5.25rem;
    overflow: hidden;
`

export const ChangeLanguageButton = styled(DropdownMenu.Root)`
    
`

export const ChangeLanguageTrigger = styled(DropdownMenu.Trigger)`
    background: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem;
    cursor: pointer;
    border: 3px solid ${(props) => props.theme['white']};
    box-shadow: 0 0 0 4px rgba(0, 0, 0, 0.0);



    &[data-state='open'] {
        border-top-right-radius: 16px;
        border-top-left-radius: 16px;
        border-bottom: 0;
        background: ${(props) => props.theme['white']};

        svg {
            fill: ${(props) => props.theme['light-blue']}
        }
    }

    &[data-state='closed'] {
        border-radius: 16px;
        background: transparent;

        svg {
            fill: ${(props) => props.theme['white']}
        }

        &:hover {
            transition: 0.2s;
            background: ${(props) => props.theme['white']};

            svg {
                fill: ${(props) => props.theme['light-blue']};
                transition: 0.2s;
            }

        }
    }
`


export const ChangeLanguageContent = styled(DropdownMenu.Content)`
    background: transparent;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 3px solid ${(props) => props.theme['white']};
    border-top: 0;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    max-width: calc(5.25rem + 1px);
    overflow: hidden;

    span {
        height: 1rem;
        width: 100%;
        background: ${(props) => props.theme['white']};
        box-shadow: inset 0px 0px 0px 2px ${(props) => props.theme['white']};
    }
`

interface ChangeLanguageItemProps {
    selected: boolean
}

export const ChangeLanguageItem = styled(DropdownMenu.Item)<ChangeLanguageItemProps>`
    background: ${(props) => props.selected == true ? props.theme['white'] : 'transparent'};

    &:hover {
        background: ${(props) => props.theme['white']};
    }

    button {
        background: transparent;
        font-size: 2rem;
        font-weight: 900;
        border: 0;
        cursor: pointer;
        height: 4rem;
        padding: 0.75rem 1.25rem;
        color: ${(props) => props.selected == true ? props.theme['light-blue'] : props.theme['white']};
    }

    button:hover {
        color: ${(props) => props.selected == false ? props.theme['light-blue'] : ''}
    }
`