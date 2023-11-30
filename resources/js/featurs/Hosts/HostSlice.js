import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    hosts: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'hosts',
    errorMess: null,
    metaInfo: []
}


// all data get
export const fetchAllHosts = createAsyncThunk("host/fetchAllHosts", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const fetchHostById = createAsyncThunk("host/fetchHostById", async (id, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${id}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const createHostData = createAsyncThunk("host/createHostData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("hosts-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateHostData = createAsyncThunk("host/updateHostData", async (data, {rejectWithValue}) => {
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

export const deleteHostData = createAsyncThunk("host/deleteHostData", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const HostSlice = createSlice({
    name: 'host',
    initialState: initialData,
    extraReducers: {
        [fetchAllHosts.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllHosts.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.hosts = payload;
        },
        [fetchAllHosts.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [fetchHostById.pending]: (state) => {
            state.isLoading = true
        },
        [fetchHostById.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchHostById.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createHostData.pending]: (state) => {
            state.isLoading = true
        },
        [createHostData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.hosts = [...state.hosts, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createHostData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateHostData.pending]: (state) => {
            state.isLoading = true
        },
        [updateHostData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                name,
                email,
                phone,
                about,
                qualification,
                thumbnail,
                id
            } = payload;

            const updateData = state.hosts.filter((host) => host.id === id);
            if (updateData) {
                updateData[0].name = name;
                updateData[0].email = email;
                updateData[0].phone = phone;
                updateData[0].about = about;
                updateData[0].qualification = qualification;
                updateData[0].thumbnail = thumbnail;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateHostData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteHostData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteHostData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.hosts = state.hosts.filter((host) => host.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteHostData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default HostSlice.reducer;
