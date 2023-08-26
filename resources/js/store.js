import {configureStore} from "@reduxjs/toolkit";
import MenuActionReducer from "./featurs/MenuAction/MenuSlice.js";
import AuthReducer from "./featurs/AuthAction/AuthSlice.js";

const store = configureStore({
    reducer: {
        menuAction: MenuActionReducer,
        authUser: AuthReducer
    }
})

export default store;
