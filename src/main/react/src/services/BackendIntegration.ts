import {BACKEND_URL, SESSION_TIMEOUT} from "../Common";

class BackendIntegration {

    static globalSessionTimeout: number = SESSION_TIMEOUT;
    static globalSessionTimeoutReset: boolean = false;

    static getFromBackend<T>(url: string, onSuccess: (data: T) => void, onFail: (error: string) => void) {
        return fetch(BACKEND_URL + url, {method: "GET"})
            .then(value => value.json() as Promise<T>)
            .then((result) => {
                    BackendIntegration.globalSessionTimeoutReset = true;
                    onSuccess(result);
                },
                (error) => {
                    BackendIntegration.globalSessionTimeoutReset = true;
                    onFail(error);
                });
    }

    static postFromBackend<T>(url: string, onSuccess: (data: T) => void, onFail: (error: string) => void) {
        return fetch(BACKEND_URL + url, {method: "POST"})
            .then(value => value.json() as Promise<T>)
            .then((result) => {
                    BackendIntegration.globalSessionTimeoutReset = true;
                    onSuccess(result);
                },
                (error) => {
                    BackendIntegration.globalSessionTimeoutReset = true;
                    onFail(error);
                });
    }
}

export default BackendIntegration;