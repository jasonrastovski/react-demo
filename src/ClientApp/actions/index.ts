import User from "../modules/users/models";

// Define the State
export interface UserApplicationState {
    users: User[];
    isLoading: boolean;
}

// Define Action Types
export enum ActionTypes {
    LOAD_USERS = "LOAD_USERS",
    USERS_LOADED = "USERS_LOADED",
    UPDATE_USER = "UPDATE_USER",
}

export interface LoadUsersAction { type: ActionTypes.LOAD_USERS }
export interface UsersLoadedAction { type: ActionTypes.USERS_LOADED }
export interface UpdateUserAction { type: ActionTypes.UPDATE_USER, id: number, name: string }

// Define Action Creators
export function loadUsers(): LoadUsersAction {
    return { type: ActionTypes.LOAD_USERS }
};

export function usersLoaded(): UsersLoadedAction {
    return { type: ActionTypes.USERS_LOADED };
};

export function updateUser(id: number, name: string): UpdateUserAction {
    return { type: ActionTypes.UPDATE_USER, id, name };
};


export type Action = LoadUsersAction | UsersLoadedAction | UpdateUserAction;