import Auth from "../model/authUser.js"
import axios from "axios";
import {mainPath} from "./helper.js";
class Api extends Auth{

    // checkIsAuth() {
    //     return super.getAuthorisation() ? true:false;
    // }


    apiAccess = axios.create({
        baseURL: `${mainPath}/api`,
        // baseURL: "https://jsonplaceholder.typicode.com/",
        headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${super.getAuthorisation()}`
        }
    })
}

export default Api;
