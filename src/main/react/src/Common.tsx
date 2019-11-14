export const BACKEND_URL: string = "http://localhost:80"
export const REMINDER_WARNING_TIME_OUT = 1000 * 60 * 60 * 12;
export const SESSION_TIMEOUT = 1000 * 60 * 10;

export enum Display {
    NOTHING,
    VIEW,
    EDIT,
}

export enum Action {
    NOTHING,
    ADD,
    EDIT,
    REMOVE
}

export enum FetchState {
    PRE_LOAD,
    LOADING,
    LOADED_WITH_ERROR,
    LOADED
}