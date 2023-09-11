import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    managements: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'managements',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllManagements = createAsyncThunk("management/fetchAllManagements", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const fetchManagementBySlug = createAsyncThunk("management/fetchManagementBySlug", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const createManagementData = createAsyncThunk("management/createManagementData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("managements-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateManagementData = createAsyncThunk("management/updateManagementData", async (data, {rejectWithValue}) => {
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

export const deleteManagementData = createAsyncThunk("management/deleteManagementData", async (data, {rejectWithValue}) => {
    try {
        const {slug} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${slug}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const ManagementSlice = createSlice({
    name: 'management',
    initialState: initialData,
    extraReducers: {
        [fetchAllManagements.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllManagements.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.managements = payload;
        },
        [fetchAllManagements.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [fetchManagementBySlug.pending]: (state) => {
            state.isLoading = false
        },
        [fetchManagementBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchManagementBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createManagementData.pending]: (state) => {
            state.isLoading = true
        },
        [createManagementData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.managements = [...state.managements, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createManagementData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateManagementData.pending]: (state) => {
            state.isLoading = true
        },
        [updateManagementData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                index_of,
                type,
                name,
                designation,
                company,
                headshot,
                biography,
                about,
                linkedin,
                facebook,
                website,
                youtube,
                twitter,
                slug,
                avatar,
                id
            } = payload;

            const updateData = state.managements.filter((management) => management.slug === slug);
            if (updateData) {
                updateData[0].index_of = index_of;
                updateData[0].type = type;
                updateData[0].name = name;
                updateData[0].designation = designation;
                updateData[0].company = company;
                updateData[0].headshot = headshot;
                updateData[0].biography = biography;
                updateData[0].about = about;
                updateData[0].linkedin = linkedin;
                updateData[0].facebook = facebook;
                updateData[0].website = website;
                updateData[0].youtube = youtube;
                updateData[0].twitter = twitter;
                updateData[0].avatar = avatar;
                updateData[0].slug = slug;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateManagementData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteManagementData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteManagementData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {slug} = payload
            state.managements = state.managements.filter((management) => management.slug !== slug);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteManagementData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default ManagementSlice.reducer;
