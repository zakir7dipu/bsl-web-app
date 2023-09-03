import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    abouts: [],
    apiUrl: 'abouts',
    errorMess: null,
    metaInfo: []
}

export const fetchAboutUs = createAsyncThunk("aboutsUs/fetchAboutUs", async (args, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const fetchAboutDataBySlug = createAsyncThunk("aboutsUs/fetchAboutDataBySlug", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const createAboutData = createAsyncThunk("aboutsUs/createAboutData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("abouts-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateAboutData = createAsyncThunk("aboutsUs/updateAboutData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const {slug, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${slug}/update`, dataset, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const deleteAboutData = createAsyncThunk("aboutsUs/deleteAboutData", async (data, {rejectWithValue}) => {
    try {
        const {slug} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${slug}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const AboutUsSlice = createSlice({
    name: "aboutsUs",
    initialState: initialData,
    extraReducers: {
        [fetchAboutUs.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAboutUs.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.abouts = payload;
        },
        [fetchAboutUs.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [fetchAboutDataBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAboutDataBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchAboutDataBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createAboutData.pending]: (state) => {
            state.isLoading = true
        },
        [createAboutData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            //state.abouts = [...state.abouts, payload]
            state.abouts =  payload
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createAboutData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateAboutData.pending]: (state) => {
            state.isLoading = true
        },
        [updateAboutData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.abouts =  payload

            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateAboutData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteAboutData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteAboutData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {slug} = payload
            state.abouts = state.abouts.filter((about) => about.slug !== slug);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteAboutData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        }
    }
});

export default AboutUsSlice.reducer;
