import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    industries: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'industries',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllIndustries = createAsyncThunk("industry/fetchAllIndustries", async (data, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${data}`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})
export const fetchIndustriesDataBySlug = createAsyncThunk("industry/fetchIndustriesDataBySlug", async (brand, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

// create brand
export const createIndustriesData = createAsyncThunk("industry/createIndustriesData", async (data, {rejectedWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("industries-store", data, config)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const updateIndustriesData = createAsyncThunk("industry/updateIndustriesData", async (data, {rejectedWithValue}) => {
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
        return rejectedWithValue(error.response.message)
    }
})
export const deleteIndustriesData = createAsyncThunk("industry/deleteIndustriesData", async (data, {rejectedWithValue}) => {
    try {
        const {slug} = data
        console.log(data)
        const res = await apiAccess.delete(`${initialData.apiUrl}/${slug}/destroy`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const IndustriesSlice = createSlice({
    name: "industry",
    initialState: initialData,
    extraReducers: {
        [fetchAllIndustries.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllIndustries.fulfilled]: (state, {payload}) => {
            //const {data, last_page, current_page, per_page, total, path} = payload
            state.isLoading = false;
            state.industries = payload;
            // state.lastPage = last_page;
            // state.currentPage = current_page;
            // state.perPage = per_page;
            // state.total = total;
            // state.apiUrl = path;
        },
        [fetchAllIndustries.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [fetchIndustriesDataBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchIndustriesDataBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchIndustriesDataBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createIndustriesData.pending]: (state) => {
            state.isLoading = true
        },
        [createIndustriesData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.industries = [...state.industries, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createIndustriesData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateIndustriesData.pending]: (state) => {
            state.isLoading = true
        },
        [updateIndustriesData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {name, order_by, image_link, slug, id} = payload
            const model = state.industries.filter((industry) => industry.slug === slug);
            if (model) {
                model[0].name = name;
                model[0].slug = slug;
                model[0].order_by = order_by;
                model[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateIndustriesData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteIndustriesData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteIndustriesData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {slug} = payload
            state.industries = state.industries.filter((industry) => industry.slug !== slug);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteIndustriesData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default IndustriesSlice.reducer
