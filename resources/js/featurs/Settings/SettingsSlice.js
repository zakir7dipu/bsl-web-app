import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, infoMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();
const initialData = {
    isLoading: true,
    generalSetting: [],
    aboutSetting: [],
    sliderSetting: [],
    technology: [],
    industry: [],
    serviceSetting: [],
    caseStudySetting: [],
    blogSetting: [],
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

export const fetchTechnologySettings = createAsyncThunk("settings/fetchTechnologySettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`technology-settings`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchIndustrySettings = createAsyncThunk("settings/fetchIndustrySettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`industry-settings`)
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

export const saveAboutSettings = createAsyncThunk("settings/saveAboutSettings", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post('store-about-settings', data, config)
        return res.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }
})

export const fetchServiceSettings = createAsyncThunk("settings/fetchServiceSettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`service-settings`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchCaseStudySettings = createAsyncThunk("settings/fetchCaseStudySettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`case-study-settings`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchBlogSettings = createAsyncThunk("settings/fetchBlogSettings", async (args, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`blog-settings`)
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
        [fetchIndustrySettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchIndustrySettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.industry = data
            state.errorMess = null
        },
        [fetchIndustrySettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },
        [fetchTechnologySettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchTechnologySettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.technology = data
            state.errorMess = null
        },
        [fetchTechnologySettings.rejected]: (state, {payload}) => {
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
            switch (payload.type) {
                case "slider":
                    state.sliderSetting = payload
                    break;
                case "technology":
                    state.technology = payload
                    break;
                case "industry":
                    state.industry = payload
                    break;
                case "about":
                    state.aboutSetting = payload
                    break;
                default:
                    state.generalSetting = payload
            }

            successMessage(`Data Saved Successfully.`);
        },
        [saveSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
            errorMessage(payload)
        },
        [saveAboutSettings.pending]: (state) => {
            state.isLoading = true
            infoMessage('We are processing your request.')
        },
        [saveAboutSettings.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            // state.generalSetting = payload
            console.log(payload)
            successMessage(`Data Saved Successfully.`);
        },
        [saveAboutSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMessage = payload
            errorMessage(payload)
        },

        [fetchServiceSettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchServiceSettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.serviceSetting = data
            state.errorMess = null
        },
        [fetchServiceSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },

        [fetchCaseStudySettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCaseStudySettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.caseStudySetting = data
            state.errorMess = null
        },
        [fetchCaseStudySettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },

        [fetchBlogSettings.pending]: (state) => {
            state.isLoading = true
        },
        [fetchBlogSettings.fulfilled]: (state, {payload}) => {
            const {data} = payload
            state.isLoading = false
            state.blogSetting = data
            state.errorMess = null
        },
        [fetchBlogSettings.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.errorMess = payload
        },
    }
})

export default settingsSlice.reducer;
