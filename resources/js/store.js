import {configureStore} from "@reduxjs/toolkit";
import MenuActionReducer from "./featurs/MenuAction/MenuSlice.js";
import AuthReducer from "./featurs/AuthAction/AuthSlice.js";
import SettingReducer from "./featurs/Settings/SettingsSlice.js";
import SeoFeatures from "./featurs/SEOSlice/SEOSlice.js";
import TestFeatures from "./featurs/TestFeatures/TestFeatures.js";

const store = configureStore({
    reducer: {
        menuAction: MenuActionReducer,
        authUser: AuthReducer,
        generalSettings : SettingReducer,
        SeoReducer : SeoFeatures,
        testData: TestFeatures
    }
})

export default store;
