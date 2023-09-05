/* eslint-disable @typescript-eslint/no-explicit-any */
import { produce } from "immer";
import { ActionTypes } from "./Actions";


export interface PortfolioState {
    language: 'BR' | 'EN',
}

export function PortifolioReducer(state: PortfolioState, action: any){
    switch(action.type){
        case ActionTypes.CHANGE_LANGUAGE: {
            return produce(state, (draft) => {
                draft.language == action.payload.language
            })
        }
    }
}