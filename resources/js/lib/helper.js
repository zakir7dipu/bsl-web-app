import Notify from "./notify.js";
import AuthUser from "../model/authUser.js";

const Auth = new AuthUser();

export const mainPath = 'http://localhost:8000'

export function errorMessage(error) {
    Notify("error", error.message)
    // clearException()
}

export function errorResponseMessage(error) {
    if (error.response) {
        if (error.response.status === 401) {
            // sessionStorage.removeItem('token');
            // return location.href = "/ssg-admin";
        } else {
            let errorObject = error.response.data.errors;
            let hasError = Object.getOwnPropertyNames(errorObject)
            if (hasError) {
                hasError.forEach(err => {
                    Notify("error", errorObject[err][0])
                })
            } else {
                Notify("error", error.response.data.message)
            }
        }
    }
    // clearException()
}

export function successMessage(success) {
    Notify("success", success)
}

export function infoMessage(info) {
    Notify("info", info)
}

export function warningMessage(warning) {
    Notify("warning", warning)
}

export const saveUserSession = (user, token) => {
    Auth.id = user.id;
    Auth.name = user.name;
    Auth.email = user.email;
    Auth.avatar = user.avatar;
    Auth.token = token;
    Auth.saveUser();
}

export const logoutUserSession = () => {
    Auth.logOut();
}

export const checkAuth = () => {
    return Auth.getAuthorisation()
}

export const clearException = () => {
    console.clear()
}
