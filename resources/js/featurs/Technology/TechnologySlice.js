import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    technologies: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'technology',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllTechnology = createAsyncThunk("technology/fetchAllTechnology", async (data, {rejectedWithValue}) => {
    try {

        const res = await apiAccess.get(`${initialData.apiUrl}/${data}`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

//pagination data
export const fetchDataByPage = createAsyncThunk("technology/fetchDataByPage", async (data, {rejectedWithValue}) => {
    try {
        const {page} = data
        const res = await apiAccess.get(`${initialData.apiUrl}?page=${page}`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const fetchDataBySlug = createAsyncThunk("technology/fetchDataBySlug", async (brand, {rejectedWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

// create brand
export const createData = createAsyncThunk("technology/createData", async (data, {rejectedWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("technology-store", data,config)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const updateData = createAsyncThunk("technology/updateData", async (data, {rejectedWithValue}) => {
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

export const deleteData = createAsyncThunk("technology/deleteData", async (data, {rejectedWithValue}) => {
    try {
        const {slug} = data
        //console.log(data)
        const res = await apiAccess.delete(`${initialData.apiUrl}/${slug}/destroy`)
        return res.data
    } catch (error) {
        return rejectedWithValue(error.response.message)
    }
})

export const TechnologySlice = createSlice({
    name: "technology",
    initialState: initialData,
    extraReducers: {
        [fetchAllTechnology.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllTechnology.fulfilled]: (state, {payload}) => {
            //const {data, last_page, current_page, per_page, total, path} = payload
            state.isLoading = false;
            state.technologies = payload;
            // state.lastPage = last_page;
            // state.currentPage = current_page;
            // state.perPage = per_page;
            // state.total = total;
            // state.apiUrl = path;
        },
        [fetchAllTechnology.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchDataByPage.pending]: (state) => {
            state.isLoading = true
        },
        [fetchDataByPage.fulfilled]: (state, action) => {
            //const {data, last_page, current_page, per_page, path, total} = action.payload
            state.isLoading = false
            state.technologies = action.payload;
            // state.lastPage = last_page;
            // state.currentPage = current_page;
            // state.perPage = per_page;
            // state.total = total;
            // state.apiUrl = path;
            // state.errorMess = null
        },
        [fetchDataByPage.rejected]: (state, action) => {
            state.isLoading = false
            state.technologies = []
            state.errorMess = action.payload
        },
        [fetchDataBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchDataBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchDataBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createData.pending]: (state) => {
            state.isLoading = true
        },
        [createData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.technologies = [...state.technologies, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateData.pending]: (state) => {
            state.isLoading = true
        },
        [updateData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {name, order_by, image_link, slug, id} = payload
            const updateData = state.technologies.filter((technology) => technology.slug === slug);
            if (updateData) {
                updateData[0].name = name;
                updateData[0].slug = slug;
                updateData[0].order_by = order_by;
                updateData[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {slug} = payload
            state.technologies = state.technologies.filter((technology) => technology.slug !== slug);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default TechnologySlice.reducer
