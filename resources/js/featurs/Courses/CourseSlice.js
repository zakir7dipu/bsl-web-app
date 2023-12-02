import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    courses: [],
    services: [],
    coursesAll: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
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

export const fetchAllCourseAll = createAsyncThunk("serviceCourses/fetchAllCourseAll", async (data, {rejectWithValue}) => {
    try {
        const {slug,serviceId} = data;
        const res = await apiAccess.get(`courses-all/${slug}/${serviceId}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const fetchAllCourseAllByPage = createAsyncThunk("serviceCourses/fetchAllCourseAllByPage", async (data, {rejectWithValue}) => {
    try {
        const {slug,serviceId,page} = data;
        const res = await apiAccess.get(`courses-all/${slug}/${serviceId}?page=${page}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const fetchCourseBySlug = createAsyncThunk("serviceCourses/fetchCourseBySlug", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`get-courses/${slug}`);
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
            state.metaInfo = []
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

        [fetchAllCourseAll.pending]: (state) => {
            state.isLoading = true
            state.coursesAll = []
        },
        [fetchAllCourseAll.fulfilled]: (state, {payload}) => {
            const {data, last_page, current_page, per_page, path, total} = payload;
            state.isLoading = false
            state.coursesAll = data
            state.lastPage = last_page>1?last_page:0
            state.currentPage = current_page
            state.total = total
            state.perPage = per_page
            state.apiUrl = path
            state.errorMess = null
        },
        [fetchAllCourseAll.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.productsForHomePage = []
            state.errorMess = {payload}
        },

        [fetchAllCourseAllByPage.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllCourseAllByPage.fulfilled]: (state, {payload}) => {
            const {data, last_page, current_page, per_page, path, total} = payload
            console.log(payload)
            state.isLoading = false
            state.coursesAll = data
            state.lastPage = last_page>1?last_page:0
            state.currentPage = current_page
            state.total = total
            state.perPage = per_page
            state.apiUrl = path
            state.errorMess = null
        },
        [fetchAllCourseAllByPage.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.productsForHomePage = []
            state.errorMess = payload
        },

        [fetchCourseBySlug.pending]: (state) => {
            state.isLoading = false
        },
        [fetchCourseBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchCourseBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },
    }
});


export default CourseSlice.reducer;

