import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import axios from "axios";
// const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    data: [],
    errorMessage: null
}

export const fetchData = createAsyncThunk("test/fetchData", async (args, {rejectedWithValue})=>{
    try {
        const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const testSlice = createSlice({
    name: 'test',
    initialState: initialData,
    extraReducers: {
        [fetchData.pending]: state => {
            state.isLoading = true
        },
        [fetchData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.data = payload
        },
        [fetchData.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
        }
    }
})

export default testSlice.reducer
