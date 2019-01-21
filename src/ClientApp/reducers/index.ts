import { UserApplicationState, Action, ActionTypes } from "../actions";

// setup an initial State for our App.
export const initialState: UserApplicationState = {
    users: [],
    isLoading: false
}

export function reducer(state: UserApplicationState = initialState, action: Action) {

    switch (action.type) {
        case ActionTypes.LOAD_USERS:
            return {
                ...state
            };

        case ActionTypes.USERS_LOADED:
            return {
                ...state
            };
        case ActionTypes.UPDATE_USER:
            return {
                ...state
            };

            default:
            return state;
    }
}