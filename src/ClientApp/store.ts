import User from "./modules/users/models";
import { reducer } from "./modules/users/reducer";
import { createStore } from "redux";

// Define the State
export interface UserApplicationState {
    users: User[];
    isLoading: boolean;
}

export const reducers = reducer;

export const store = createStore(reducers);