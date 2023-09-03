import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    humburgerNavExpander: false
}

export const navSlice = createSlice({
    name:"navbars",
    initialState: initialData,
    reducers: {
        humburgerNavAction: (state) => {
            state.humburgerNavExpander = !state.humburgerNavExpander
        }
    }
})

export const {humburgerNavAction} = navSlice.actions
export default navSlice.reducer
