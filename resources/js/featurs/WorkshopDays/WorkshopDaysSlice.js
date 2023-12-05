import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    workshopdays: [],
    apiUrl: 'days',
    errorMess: null,
    metaInfo: []
}

export const fetchAllWorkshopDays = createAsyncThunk("days/fetchAllWorkshopDays", async (workshop, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${workshop}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// create category
export const createWorkshopDays = createAsyncThunk("days/createWorkshopDays", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.post(initialData.apiUrl, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})
// one data get by id
export const fetchWorkshopDaysById = createAsyncThunk("days/fetchWorkshopDaysById", async (item, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${item}/show`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// update
export const updateWorkshopDays = createAsyncThunk("days/updateWorkshopDays", async (data, {rejectWithValue}) => {
    try {
        const {item, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${item}/update`, dataset)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// delete
export const deleteWorkshopDays = createAsyncThunk("days/deleteWorkshopDays", async (data, {rejectWithValue}) => {
    try {
        const {item} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${item}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})


export const WorkshopDaysSlice = createSlice({
    name: "days",
    initialState: initialData,
    extraReducers: {
        [fetchAllWorkshopDays.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllWorkshopDays.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.workshopdays = payload;
        },
        [fetchAllWorkshopDays.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createWorkshopDays.pending]: (state) => {
            state.isLoading = true;
        },
        [createWorkshopDays.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.workshopdays = [...state.workshopdays, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createWorkshopDays.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchWorkshopDaysById.pending]: (state) => {
            state.isLoading = true
        },
        [fetchWorkshopDaysById.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchWorkshopDaysById.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [updateWorkshopDays.pending]: (state) => {
            state.isLoading = true
        },
        [updateWorkshopDays.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id, workshop_seminar_id, title, date} = payload
            const updateWorkshopDays = state.workshopdays.filter((item) => item.id === id);
            if (updateWorkshopDays) {
                updateWorkshopDays[0].workshop_seminar_id = workshop_seminar_id;
                updateWorkshopDays[0].title = title;
                updateWorkshopDays[0].date = date;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateWorkshopDays.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [deleteWorkshopDays.pending]: (state) => {
            state.isLoading = true
        },
        [deleteWorkshopDays.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.workshopdays = state.workshopdays.filter((item) => item.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteWorkshopDays.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
});

export default WorkshopDaysSlice.reducer;
