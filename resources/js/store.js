import {configureStore} from "@reduxjs/toolkit";
import MenuActionReducer from "./featurs/MenuAction/MenuSlice.js";
import AuthReducer from "./featurs/AuthAction/AuthSlice.js";
import SettingReducer from "./featurs/Settings/SettingsSlice.js";
import SeoFeatures from "./featurs/SEOSlice/SEOSlice.js";
import TestFeatures from "./featurs/TestFeatures/TestFeatures.js";
import TechnologyFeature from "./featurs/Technology/TechnologySlice.js";
import IndustriesFeature from "./featurs/Industries/IndustriesSlice.js";
import NavReducer from "./featurs/NavAction/NavSlice.js";
import AboutsFeature from "./featurs/AboutUs/AboutUsSlice.js";
import ManagementFeature from "./featurs/Management/ManagementSlice.js";
import TeamsFeatuer from "./featurs/Teams/TeamSlice.js";

const store = configureStore({
    reducer: {
        navAction: NavReducer,
        menuAction: MenuActionReducer,
        authUser: AuthReducer,
        generalSettings: SettingReducer,
        SeoReducer: SeoFeatures,
        testData: TestFeatures,
        technologyReducer: TechnologyFeature,
        industriesReducer: IndustriesFeature,
        aboutsReducer: AboutsFeature,
        managementReducer: ManagementFeature,
        teamReducer: TeamsFeatuer,
    }
})

export default store;
