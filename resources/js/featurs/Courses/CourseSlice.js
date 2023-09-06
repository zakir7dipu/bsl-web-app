import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {errorMessage, successMessage} from "../../lib/helper.js";
import {fetchParentServices} from "../Service/ServiceSlice.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    courses: [],
    services: [],
    apiUrl: 'courses',
    errorMess: null,
    metaInfo: []
}

/*fetch all services*/
export const fetchAllCourses = createAsyncThunk("serviceCourses/fetchAllCourses", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getServices = createAsyncThunk("serviceCourses/getServices", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get('get-services')
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*create service*/

export const createCourseData = createAsyncThunk("serviceCourses/createCourseData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("courses-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*show service*/
export const showCourseData = createAsyncThunk("serviceCourses/showCourseData", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*update service*/
export const updateCourseData = createAsyncThunk("serviceCourses/updateCourseData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const {id, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${id}/update`, dataset, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
/*delete service*/

export const deleteCourseData = createAsyncThunk("serviceCourses/deleteCourseData", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const CourseSlice = createSlice({
    name: 'serviceCourses',
    initialState: initialData,
    extraReducers: {
        [fetchAllCourses.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllCourses.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.courses = payload;
        },
        [fetchAllCourses.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [getServices.pending]: (state) => {
            state.isLoading = true
        },
        [getServices.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.services = payload;
        },
        [getServices.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createCourseData.pending]: (state) => {
            state.isLoading = true
        },
        [createCourseData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.courses = [...state.courses, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createCourseData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [showCourseData.pending]: (state) => {
            state.isLoading = false
        },
        [showCourseData.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [showCourseData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [updateCourseData.pending]: (state) => {
            state.isLoading = true
        },
        [updateCourseData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.metaInfo = payload;
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateCourseData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteCourseData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteCourseData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.courses = state.courses.filter((model) => model.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteCourseData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default CourseSlice.reducer;

