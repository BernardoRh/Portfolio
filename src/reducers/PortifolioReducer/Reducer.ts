import { produce } from "immer";
import { ActionTypes } from "./Actions";


interface PortifolioState {
    language: 'BR' | 'EN',
}

export function PortifolioReducer(state: PortifolioState, action: any){
    switch(action.type){
        case ActionTypes.CHANGE_LANGUAGE: {
            return produce(state, (draft) => {
                draft.language == action.payload.language
            })
        }
    }
}