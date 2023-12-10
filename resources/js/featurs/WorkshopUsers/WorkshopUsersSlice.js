import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    eventsUsers: [],
    apiUrl: 'event-users',
    errorMess: null,
    metaInfo: []
}

export const fetchAllEventUsers = createAsyncThunk("user/fetchAllEventUsers", async (workshop, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${workshop}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// create category
export const createEventUser = createAsyncThunk("user/createEventUser", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post(initialData.apiUrl, data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})
// one data get by id
export const fetchEventUserById = createAsyncThunk("user/fetchEventUserById", async (item, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${item}/show`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// update
export const updateEventUser = createAsyncThunk("user/updateEventUser", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const {item, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${item}/update`, dataset, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// delete
export const deleteEventUser = createAsyncThunk("user/deleteEventUser", async (data, {rejectWithValue}) => {
    try {
        const {item} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${item}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})


export const WorkshopUsersSlice = createSlice({
    name: "EventUser",
    initialState: initialData,
    extraReducers: {
        [fetchAllEventUsers.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllEventUsers.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.eventsUsers = payload;
        },
        [fetchAllEventUsers.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createEventUser.pending]: (state) => {
            state.isLoading = true;
        },
        [createEventUser.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.eventsUsers = [...state.eventsUsers, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createEventUser.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchEventUserById.pending]: (state) => {
            state.isLoading = true
        },
        [fetchEventUserById.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchEventUserById.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [updateEventUser.pending]: (state) => {
            state.isLoading = true
        },
        [updateEventUser.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id, workshop_seminar_id, name, email, phone, designation, linkedin} = payload
            const updateEventUser = state.eventsUsers.filter((item) => item.id === id);
            if (updateEventUser) {
                updateEventUser[0].workshop_seminar_id = workshop_seminar_id;
                updateEventUser[0].name = name;
                updateEventUser[0].email = email;
                updateEventUser[0].phone = phone;
                updateEventUser[0].designation = designation;
                updateEventUser[0].linkedin = linkedin;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateEventUser.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [deleteEventUser.pending]: (state) => {
            state.isLoading = true
        },
        [deleteEventUser.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.eventsUsers = state.eventsUsers.filter((item) => item.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteEventUser.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
});

export default WorkshopUsersSlice.reducer;
