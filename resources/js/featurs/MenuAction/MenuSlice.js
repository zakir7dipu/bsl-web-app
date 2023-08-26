import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    isOpenBackendSideNav: true,
    rightHeader: {
        messageBtn: false,
        notificationBtn: false,
        languageBtn: false,
        profileBtn: false,
    }
}

export const menuActionSlice = createSlice({
    name: 'menuAction',
    initialState: initialData,
    reducers: {
        backendSideNaAction: (state) => {
            state.isOpenBackendSideNav = !state.isOpenBackendSideNav
        },
        rightHeaderAction: (state, {payload}) => {
            let actions = Object.keys(state.rightHeader).map(key => ({
              key: key,
              value: payload === key ? !state.rightHeader[key]:false
            }));
            state.rightHeader = actions.reduce((acc, obj) => {
                acc[obj.key] = obj.value;
                return acc;
            }, {});
        }
    }
})

export const {backendSideNaAction, rightHeaderAction} = menuActionSlice.actions;
export default menuActionSlice.reducer;
