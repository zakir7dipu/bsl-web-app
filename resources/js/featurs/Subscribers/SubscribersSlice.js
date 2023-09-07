import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    subscribers: [],
    apiUrl: 'subscribers',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllSubscriber = createAsyncThunk("subscriberData/fetchAllSubscriber", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchSubscriberBySlug = createAsyncThunk("subscriberData/fetchSubscriberBySlug", async (brand, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// create brand
export const createSubscriber = createAsyncThunk("subscriberData/createSubscriber", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("subscribers-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const deleteSubscriber = createAsyncThunk("subscriberData/deleteSubscriber", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const SubscribersSlice = createSlice({
    name: "subscriberData",
    initialState: initialData,
    extraReducers: {
        [fetchAllSubscriber.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllSubscriber.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.subscribers = payload;
        },
        [fetchAllSubscriber.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [fetchSubscriberBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchSubscriberBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchSubscriberBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createSubscriber.pending]: (state) => {
            state.isLoading = true
        },
        [createSubscriber.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.subscribers = [...state.subscribers, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createSubscriber.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteSubscriber.pending]: (state) => {
            state.isLoading = true
        },
        [deleteSubscriber.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.subscribers = state.subscribers.filter((ts) => ts.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteSubscriber.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default SubscribersSlice.reducer
