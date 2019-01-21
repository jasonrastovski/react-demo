import User from "./models";

// Define Action Types
export enum ActionTypes {
    LOAD_USERS = "LOAD_USERS",
    UPDATE_USER = "UPDATE_USER",
}

// Define Actions
export interface LoadUsersAction { type: ActionTypes.LOAD_USERS, users: User[] }
export interface UpdateUserAction { type: ActionTypes.UPDATE_USER, id: number, name: string }