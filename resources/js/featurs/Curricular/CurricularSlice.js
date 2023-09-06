import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    curriculars: [],
    apiUrl: 'curricular',
    errorMess: null,
    metaInfo: []
}

export const fetchAllCurricular = createAsyncThunk("curricular/fetchAllCurricular", async (course, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${course}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// create category
export const createCurricular = createAsyncThunk("curricular/createCurricular", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.post(initialData.apiUrl, data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})
// one data get by id
export const fetchCurricularById = createAsyncThunk("curricular/fetchCurricularById", async (item, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${item}/show`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// update
export const updateCurricular = createAsyncThunk("curricular/updateCurricular", async (data, {rejectWithValue}) => {
    try {
        const {item, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${item}/update`, dataset)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

// delete
export const deleteCurricular = createAsyncThunk("curricular/deleteCurricular", async (data, {rejectWithValue}) => {
    try {
        const {item} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${item}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})


export const CurricularSlice = createSlice({
    name: "curricular",
    initialState: initialData,
    extraReducers: {
        [fetchAllCurricular.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllCurricular.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.curriculars = payload;
        },
        [fetchAllCurricular.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createCurricular.pending]: (state) => {
            state.isLoading = true;
        },
        [createCurricular.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.curriculars = [...state.curriculars, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createCurricular.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [fetchCurricularById.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCurricularById.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchCurricularById.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [updateCurricular.pending]: (state) => {
            state.isLoading = true
        },
        [updateCurricular.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id, course_id, name, description} = payload
            const updateCurricular = state.curriculars.filter((item) => item.id === id);
            if (updateCurricular) {
                updateCurricular[0].course_id = course_id;
                updateCurricular[0].name = name;
                updateCurricular[0].description = description;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateCurricular.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
        [deleteCurricular.pending]: (state) => {
            state.isLoading = true
        },
        [deleteCurricular.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.curriculars = state.curriculars.filter((item) => item.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteCurricular.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
});

export default CurricularSlice.reducer;
