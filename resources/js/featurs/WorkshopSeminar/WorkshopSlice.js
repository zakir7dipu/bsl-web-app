import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    workshops: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'workshops',
    errorMess: null,
    metaInfo: []
}

/*fetch all services*/
export const fetchAllWorkshopSeminar = createAsyncThunk("workshopSeminar/fetchAllWorkshopSeminar", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const WorkshopSlice = createSlice({
    name: 'workshopSeminar',
    initialState: initialData,
    reducers: {
        collectData: (state, {payload}) => {

        }
    },
    extraReducers: {
        [fetchAllWorkshopSeminar.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllWorkshopSeminar.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.workshops = payload;
        },
        [fetchAllWorkshopSeminar.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

    }
});


export default WorkshopSlice.reducer;
