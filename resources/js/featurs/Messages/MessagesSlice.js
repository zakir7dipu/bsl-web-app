import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    userMessages: [],
    apiUrl: 'messages',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllUserMessages = createAsyncThunk("messagesData/fetchAllUserMessages", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchUserMessagesBySlug = createAsyncThunk("messagesData/fetchUserMessagesBySlug", async (brand, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// create brand
export const createUserMessages = createAsyncThunk("messagesData/createUserMessages", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("messages-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const deleteUserMessages = createAsyncThunk("messagesData/deleteUserMessages", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const MessagesSlice = createSlice({
    name: "messagesData",
    initialState: initialData,
    extraReducers: {
        [fetchAllUserMessages.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllUserMessages.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.userMessages = payload;
        },
        [fetchAllUserMessages.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [fetchUserMessagesBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchUserMessagesBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchUserMessagesBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createUserMessages.pending]: (state) => {
            state.isLoading = true
        },
        [createUserMessages.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.userMessages = [...state.userMessages, payload]
            state.errorMess = null
            successMessage("Messages have been sent successfully. We will contact you very soon")
        },
        [createUserMessages.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteUserMessages.pending]: (state) => {
            state.isLoading = true
        },
        [deleteUserMessages.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.userMessages = state.userMessages.filter((ts) => ts.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteUserMessages.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default MessagesSlice.reducer
