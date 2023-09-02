import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, infoMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();
const initialData = {
    isLoading: true,
    generalSetting: [],
    aboutSetting: [],
    sliderSetting: [],
    technologyLimit: 18,
    industryLimit: 10,
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


export const saveSettings = createAsyncThunk("settings/saveSettings", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post('store-settings', data, config)
        return res.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
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

        [saveSettings.pending]: (state) => {
            state.isLoading = true
            infoMessage('We are processing your request.')
        },
        [saveSettings.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.generalSetting = payload
            successMessage(`Data Saved Successfully.`);
        },
        [saveSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
            errorMessage(payload)
        }
    }
})

export default settingsSlice.reducer;
