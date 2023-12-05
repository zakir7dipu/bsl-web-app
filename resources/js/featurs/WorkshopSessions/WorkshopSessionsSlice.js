import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    sessions: [],
    apiUrl: 'sessions',
    errorMess: null,
    metaInfo: []
}

export const fetchAllSessions = createAsyncThunk("sessions/fetchAllSessions", async (day, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${day}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// create category
export const createSessions = createAsyncThunk("sessions/createSessions", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.post(initialData.apiUrl, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})
// one data get by id
export const fetchSessionsById = createAsyncThunk("sessions/fetchSessionsById", async (item, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${item}/show`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// update
export const updateSessions = createAsyncThunk("sessions/updateSessions", async (data, {rejectWithValue}) => {
    try {
        const {item, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${item}/update`, dataset)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// delete
export const deleteSessions = createAsyncThunk("sessions/deleteSessions", async (data, {rejectWithValue}) => {
    try {
        const {item} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${item}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})


export const WorkshopSessionsSlice = createSlice({
    name: "days",
    initialState: initialData,
    extraReducers: {
        [fetchAllSessions.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllSessions.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.sessions = payload;
        },
        [fetchAllSessions.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createSessions.pending]: (state) => {
            state.isLoading = true;
        },
        [createSessions.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.sessions = [...state.sessions, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createSessions.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchSessionsById.pending]: (state) => {
            state.isLoading = true
        },
        [fetchSessionsById.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchSessionsById.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [updateSessions.pending]: (state) => {
            state.isLoading = true
        },
        [updateSessions.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id, workshop_day_id, title, date,from, to, topics, image_link} = payload
            const updateSessions = state.sessions.filter((item) => item.id === id);
            if (updateSessions) {
                updateSessions[0].workshop_day_id = workshop_day_id;
                updateSessions[0].title = title;
                updateSessions[0].date = date;
                updateSessions[0].from = from;
                updateSessions[0].to = to;
                updateSessions[0].topics = topics;
                updateSessions[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateSessions.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [deleteSessions.pending]: (state) => {
            state.isLoading = true
        },
        [deleteSessions.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.sessions = state.sessions.filter((item) => item.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteSessions.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
});

export default WorkshopSessionsSlice.reducer;
