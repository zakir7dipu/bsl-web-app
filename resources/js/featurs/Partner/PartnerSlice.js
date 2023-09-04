import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    partners: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'partners',
    errorMess: null,
    metaInfo: []
}
// all data get
export const fetchAllPartners = createAsyncThunk("fetchAllPartners/fetchAllPartners", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const fetchPartnerBySlug = createAsyncThunk("OurPartners/fetchPartnerBySlug", async (id, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${id}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const createPartnerData = createAsyncThunk("OurPartners/createPartnerData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("partners-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updatePartnerData = createAsyncThunk("OurPartners/updatePartnerData", async (data, {rejectWithValue}) => {
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

export const deletePartnerData = createAsyncThunk("OurPartners/deletePartnerData", async (data, {rejectWithValue}) => {
    try {
        const {Partner} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${Partner}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const PartnerSlice = createSlice({
    name: 'OurPartners',
    initialState: initialData,
    extraReducers: {
        [fetchAllPartners.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllPartners.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.partners = payload;
        },
        [fetchAllPartners.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [fetchPartnerBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchPartnerBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchPartnerBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createPartnerData.pending]: (state) => {
            state.isLoading = true
        },
        [createPartnerData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.partners = [...state.partners, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createPartnerData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updatePartnerData.pending]: (state) => {
            state.isLoading = true
        },
        [updatePartnerData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                name,
                index_of,
                description,
                image_link,
                id
            } = payload;

            const updateData = state.partners.filter((partner) => partner.id === id);
            if (updateData) {
                updateData[0].name = name;
                updateData[0].index_of = index_of;
                updateData[0].description = description;
                updateData[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updatePartnerData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deletePartnerData.pending]: (state) => {
            state.isLoading = true
        },
        [deletePartnerData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.partners = state.partners.filter((partner) => partner.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deletePartnerData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default PartnerSlice.reducer;
