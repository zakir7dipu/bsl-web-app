import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";

const {apiAccess} = new Api();
const initialData = {
    isLoading: true,
    generalSetting: [],
    aboutSetting: [],
    sliderSetting: [],
    technologySetting: [],
    alignSetting: [],
    errorMess: null,
}

export const fetchAllSettings = createAsyncThunk("settings/fetchAllSettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`all-settings`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchAboutSettings = createAsyncThunk("settings/fetchAboutSettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`about-settings`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchSliderSettings = createAsyncThunk("settings/fetchSliderSettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`slider-settings`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchTechnologySettings = createAsyncThunk("settings/fetchTechnologySettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`technology-settings`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchAlignSettings = createAsyncThunk("settings/fetchAlignSettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`align-with-settings`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const settingsSlice = createSlice({
    name: "settings",
    initialState: initialData,

    extraReducers: {
        [fetchAllSettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllSettings.fulfilled]: (state, {payload}) => {
            const {allSettings} = payload
            state.isLoading = false
            state.generalSetting = allSettings
            state.errorMess = null
        },
        [fetchAllSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },

        [fetchAboutSettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAboutSettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.aboutSetting = data
            state.errorMess = null
        },
        [fetchAboutSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },

        [fetchSliderSettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchSliderSettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.sliderSetting = data
            state.errorMess = null
        },
        [fetchSliderSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },

        [fetchTechnologySettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchTechnologySettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.technologySetting = data
            state.errorMess = null
        },
        [fetchTechnologySettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },

        [fetchAlignSettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAlignSettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.alignSetting = data
            state.errorMess = null
        },
        [fetchAlignSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },
    }
})

export default settingsSlice.reducer;
