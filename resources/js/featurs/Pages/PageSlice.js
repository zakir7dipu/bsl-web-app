import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    pages: [],
    apiUrl: 'pages',
    errorMess: null,
    metaInfo: []
}
// all data get
export const fetchAllPageData = createAsyncThunk("pagesData/fetchAllPageData", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const fetchClientBySlug = createAsyncThunk("pagesData/fetchClientBySlug", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const createPageData = createAsyncThunk("pagesData/createPageData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("pages-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updatePageData = createAsyncThunk("pagesData/updatePageData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const {id, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${id}/update`, dataset, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const deletePageData = createAsyncThunk("pagesData/deletePageData", async (data, {rejectWithValue}) => {
    try {
        const {client} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${client}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchSearchPageData = createAsyncThunk("testimonialData/fetchSearchPageData", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.post(`${initialData.apiUrl}-search`,data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const PageSlice = createSlice({
    name: 'pagesData',
    initialState: initialData,
    extraReducers: {
        [fetchAllPageData.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllPageData.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.pages = payload;
        },
        [fetchAllPageData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [fetchClientBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchClientBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchClientBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createPageData.pending]: (state) => {
            state.isLoading = true
        },
        [createPageData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.pages = [...state.pages, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createPageData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updatePageData.pending]: (state) => {
            state.isLoading = true
        },
        [updatePageData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                name,
                slug,
                description,
                image_link,
                id
            } = payload;

            const updateData = state.pages.filter((page) => page.id === id);
            if (updateData) {
                updateData[0].name = name;
                updateData[0].slug = slug;
                updateData[0].description = description;
                updateData[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updatePageData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deletePageData.pending]: (state) => {
            state.isLoading = true
        },
        [deletePageData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.pages = state.pages.filter((page) => page.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deletePageData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
        [fetchSearchPageData.pending]: (state) => {
            state.isLoading = false
        },
        [fetchSearchPageData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.pages = payload;
            state.errorMess = null
        },
        [fetchSearchPageData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default PageSlice.reducer;
