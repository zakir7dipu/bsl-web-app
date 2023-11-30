import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    current: null
}
export const PaginationSlice = createSlice({
    name: "pagination",
    initialState: initialData,
    reducers: {
        updateCurrentPage:(state,{payload})=>{
            state.current = payload + 1
        }
    }
})

export const {updateCurrentPage} = PaginationSlice.actions;
export default PaginationSlice.reducer;
