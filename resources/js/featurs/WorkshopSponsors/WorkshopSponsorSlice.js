import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    sponsors: [],
    apiUrl: 'sponsors',
    errorMess: null,
    metaInfo: []
}

export const fetchAllSponsors = createAsyncThunk("sponsor/fetchAllSponsors", async (workshop, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${workshop}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// create category
export const createSponsors = createAsyncThunk("sponsor/createSponsors", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.post(initialData.apiUrl, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})
// one data get by id
export const fetchSponsorById = createAsyncThunk("sponsor/fetchSponsorById", async (item, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${item}/show`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// update
export const updateSponsor = createAsyncThunk("sponsor/updateSponsor", async (data, {rejectWithValue}) => {
    try {
        const {item, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${item}/update`, dataset)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// delete
export const deleteSponsor = createAsyncThunk("sponsor/deleteSponsor", async (data, {rejectWithValue}) => {
    try {
        const {item} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${item}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})


export const WorkshopSponsorSlice = createSlice({
    name: "sponsor",
    initialState: initialData,
    extraReducers: {
        [fetchAllSponsors.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllSponsors.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.sponsors = payload;
        },
        [fetchAllSponsors.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createSponsors.pending]: (state) => {
            state.isLoading = true;
        },
        [createSponsors.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.sponsors = [...state.sponsors, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createSponsors.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchSponsorById.pending]: (state) => {
            state.isLoading = true
        },
        [fetchSponsorById.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchSponsorById.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [updateSponsor.pending]: (state) => {
            state.isLoading = true
        },
        [updateSponsor.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id, workshop_seminar_id, title, thumbnail} = payload
            const updateSponsor = state.sponsors.filter((item) => item.id === id);
            if (updateSponsor) {
                updateSponsor[0].workshop_seminar_id = workshop_seminar_id;
                updateSponsor[0].title = title;
                updateSponsor[0].thumbnail = thumbnail;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateSponsor.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [deleteSponsor.pending]: (state) => {
            state.isLoading = true
        },
        [deleteSponsor.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.sponsors = state.sponsors.filter((item) => item.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteSponsor.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
});

export default WorkshopSponsorSlice.reducer;
