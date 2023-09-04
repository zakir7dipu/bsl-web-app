import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    clients: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'clients',
    errorMess: null,
    metaInfo: []
}
// all data get
export const fetchAllClients = createAsyncThunk("fetchAllClients/fetchAllClients", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const fetchClientBySlug = createAsyncThunk("OurClients/fetchClientBySlug", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const createClientData = createAsyncThunk("OurClients/createClientData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("clients-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateClientData = createAsyncThunk("OurClients/updateClientData", async (data, {rejectWithValue}) => {
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

export const deleteClientData = createAsyncThunk("OurClients/deleteClientData", async (data, {rejectWithValue}) => {
    try {
        const {slug} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${slug}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const ClientSlice = createSlice({
    name: 'OurClients',
    initialState: initialData,
    extraReducers: {
        [fetchAllClients.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllClients.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.clients = payload;
        },
        [fetchAllClients.rejected]: (state, {payload}) => {
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

        [createClientData.pending]: (state) => {
            state.isLoading = true
        },
        [createClientData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.clients = [...state.clients, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createClientData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateClientData.pending]: (state) => {
            state.isLoading = true
        },
        [updateClientData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                name,
                index_of,
                description,
                image_link,
                id
            } = payload;

            const updateData = state.clients.filter((clients) => client.id === id);
            if (updateData) {
                updateData[0].name = name;
                updateData[0].index_of = index_of;
                updateData[0].description = description;
                updateData[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateClientData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteClientData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteClientData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.clients = state.clients.filter((clients) => client.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteClientData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default ClientSlice.reducer;
