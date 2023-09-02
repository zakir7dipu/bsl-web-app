import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, infoMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    seo: [],
    errorMessage: null
}

export const fetchSeoData = createAsyncThunk("SEO/fetchSeoData", async (page,{rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`seo/${page.toLowerCase()}`)
        return res.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }
})

export const saveSeoData = createAsyncThunk("SEO/saveSeoData", async (data,{rejectWithValue}) => {
    try {
        const res = await apiAccess.post('store-seo',data)
        return res.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }
})

export const SEOSlice = createSlice({
    name: "SEO",
    initialState: initialData,
    extraReducers: {
        [fetchSeoData.pending]: (state) => {
            state.isLoading = true
        },
        [fetchSeoData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.seo = payload
        },
        [fetchSeoData.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.seo = []
            state.errorMessage = payload
            errorMessage(payload)
        },
        [saveSeoData.pending]: (state) => {
            state.isLoading = true
            infoMessage('We are processing your request.')
        },
        [saveSeoData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.seo = payload
            successMessage(`Data Saved Successfully.`);
        },
        [saveSeoData.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
            errorMessage(payload)
        }
    }
})

export default SEOSlice.reducer;
