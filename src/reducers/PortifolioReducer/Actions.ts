export enum ActionTypes {
    CHANGE_LANGUAGE = 'CHANGE_LANGUAGE'
}


export function changeLanguageAction(language: 'BR' | 'EN') {
    return {
        type: ActionTypes.CHANGE_LANGUAGE,
        payload: {
            language
        }
    }
}