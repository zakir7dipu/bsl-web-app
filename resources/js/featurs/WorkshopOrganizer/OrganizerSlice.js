import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    organizers: [],
    apiUrl: 'organizers',
    errorMess: null,
    metaInfo: []
}

export const fetchAllOrganizers = createAsyncThunk("organizer/fetchAllOrganizers", async (workshop, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${workshop}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// create category
export const createOrganizer = createAsyncThunk("organizer/createOrganizer", async (data, {rejectWithValue}) => {
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
export const fetchOrganizerById = createAsyncThunk("organizer/fetchOrganizerById", async (item, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${item}/show`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// update
export const updateOrganizer = createAsyncThunk("organizer/updateOrganizer", async (data, {rejectWithValue}) => {
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
export const deleteOrganizer = createAsyncThunk("organizer/deleteOrganizer", async (data, {rejectWithValue}) => {
    try {
        const {item} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${item}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})


export const OrganizerSlice = createSlice({
    name: "organizer",
    initialState: initialData,
    extraReducers: {
        [fetchAllOrganizers.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllOrganizers.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.organizers = payload;
        },
        [fetchAllOrganizers.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createOrganizer.pending]: (state) => {
            state.isLoading = true;
        },
        [createOrganizer.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.organizers = [...state.organizers, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createOrganizer.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchOrganizerById.pending]: (state) => {
            state.isLoading = true
        },
        [fetchOrganizerById.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchOrganizerById.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [updateOrganizer.pending]: (state) => {
            state.isLoading = true
        },
        [updateOrganizer.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id, workshop_seminar_id, title, thumbnail} = payload
            const updateOrganizer = state.organizers.filter((item) => item.id === id);
            if (updateOrganizer) {
                updateOrganizer[0].workshop_seminar_id = workshop_seminar_id;
                updateOrganizer[0].title = title;
                updateOrganizer[0].thumbnail = thumbnail;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateOrganizer.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [deleteOrganizer.pending]: (state) => {
            state.isLoading = true
        },
        [deleteOrganizer.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.organizers = state.organizers.filter((item) => item.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteOrganizer.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
});

export default OrganizerSlice.reducer;
