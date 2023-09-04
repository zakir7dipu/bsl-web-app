import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    humburgerNavExpander: false,
    videoModuleShow: false,
    videoId: ""
}

export const navSlice = createSlice({
    name:"navbars",
    initialState: initialData,
    reducers: {
        humburgerNavAction: (state) => {
            state.humburgerNavExpander = !state.humburgerNavExpander
        },
        videoModuleAction: (state, {payload}) => {
            state.videoModuleShow = !state.videoModuleShow
            state.videoId = payload
        }
    }
})

export const {humburgerNavAction, videoModuleAction} = navSlice.actions
export default navSlice.reducer
