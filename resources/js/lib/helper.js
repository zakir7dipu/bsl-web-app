import Notify from "./notify.js";
import AuthUser from "../model/authUser.js";

const Auth = new AuthUser();

export const mainPath = 'http://localhost:8000'

export function errorMessage(error) {
    Notify("error", error?.message)
}

export function errorResponseMessage(error) {
    if (error.response) {
        if (error.response.status === 401) {
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

export const uid = function () {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

export const truncateString = (str, n) => {
    return (str?.length > n) ? `${str.slice(0, n - 1)}...` : str;
}

export const ucFirst = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export const createInputFileUrl = (file) => {
    return window.URL.createObjectURL(file)
}

export const goToExternalLink = (path) => {
    window.open(path, '_blank');
}

export const goToInternalLink = (path)=> {
    window.open(mainPath + path, '_blank');
}

export const useInternalLink = (path)=> {
    return mainPath + path
}

export const isOdd = (number) => {
    return number % 2 === 1;
}

