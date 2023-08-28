import {configureStore} from "@reduxjs/toolkit";
import MenuActionReducer from "./featurs/MenuAction/MenuSlice.js";
import AuthReducer from "./featurs/AuthAction/AuthSlice.js";
import SettingReducer from "./featurs/Settings/SettingsSlice.js";

const store = configureStore({
    reducer: {
        menuAction: MenuActionReducer,
        authUser: AuthReducer,
        generalSettings : SettingReducer
    }
})

export default store;
