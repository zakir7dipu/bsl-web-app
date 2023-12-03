import {createSlice} from "@reduxjs/toolkit";

const initialData = {
    isModalShow: false,
    title: "",
    date: "",
    index: ""
}

export const SlotModal = createSlice({
    name: "SlotModal",
    initialState: initialData,
    reducers: {
        modalAction: (state, {payload}) => {
            const {date, index, title} = payload
            state.isModalShow = !state.isModalShow
            state.title = title
            state.date = date
            state.index = index
        }
    }
})

export const {modalAction} = SlotModal.actions;
export default SlotModal.reducer;
