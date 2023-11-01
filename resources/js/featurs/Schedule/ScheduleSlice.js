import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    schedules: [],
    apiUrl: 'schedules',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllSchedules = createAsyncThunk("scheduleData/fetchAllSchedules", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const showScheduleMessage = createAsyncThunk("scheduleData/showScheduleMessage", async (id, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${id}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// create brand
export const createSchedules = createAsyncThunk("scheduleData/createSchedules", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("schedules-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const deleteSchedules = createAsyncThunk("scheduleData/deleteSchedules", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const ScheduleSlice = createSlice({
    name: "scheduleData",
    initialState: initialData,
    extraReducers: {
        [fetchAllSchedules.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllSchedules.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.schedules = payload;
        },
        [fetchAllSchedules.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [showScheduleMessage.pending]: (state) => {
            state.isLoading = false
        },
        [showScheduleMessage.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [showScheduleMessage.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createSchedules.pending]: (state) => {
            state.isLoading = true
        },
        [createSchedules.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.schedules = [...state.schedules, payload]
            state.errorMess = null
            successMessage("Schedule have been sent successfully. We will contact you very soon")
        },
        [createSchedules.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteSchedules.pending]: (state) => {
            state.isLoading = true
        },
        [deleteSchedules.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.schedules = state.schedules.filter((ts) => ts.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteSchedules.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default ScheduleSlice.reducer
