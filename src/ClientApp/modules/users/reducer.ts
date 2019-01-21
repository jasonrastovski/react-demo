import { UserApplicationState } from "../../store";
import { Action } from "./actionCreator";
import { ActionTypes } from "./actions";

// setup an initial State for our App.
export const initialState: UserApplicationState = {
    users: [],
    isLoading: true
}

export function reducer(state: UserApplicationState = initialState, action: Action) {

    switch (action.type) {
        case ActionTypes.LOAD_USERS:
            console.log('LOAD_USERS');
            return {
                ...state,
                users: action.users,
                isLoading: false
            };

        case ActionTypes.UPDATE_USER:
            console.log('UPDATE_USER');
            return {
                ...state
            };

        default:
        console.log('Default value returned.');
            return state;
    }
}