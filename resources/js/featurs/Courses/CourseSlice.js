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
            const {
                name,
                service_id,
                thumbnail,
                banner,
                description,
                video_id,
                price,
                discount,
                class_count,
                duration,
                class_per_week,
                class_duration,
                language,
                delivery_mode,
                curriculum_text,
                slug,
                course_type,
                start_date,
                end_date,
                published_at,
                id
            } = action.payload

            const updateData = state.courses.filter((model) => model.id === id);
            if (updateData) {
                updateData[0].service_id = service_id;
                updateData[0].name = name
                updateData[0].description = description;
                updateData[0].thumbnail = thumbnail;
                updateData[0].banner = banner;
                updateData[0].video_id = video_id;
                updateData[0].price = price;
                updateData[0].discount = discount;
                updateData[0].class_count = class_count;
                updateData[0].duration = duration;
                updateData[0].class_per_week = class_per_week;
                updateData[0].class_duration = class_duration;
                updateData[0].language = language;
                updateData[0].delivery_mode = delivery_mode;
                updateData[0].curriculum_text = curriculum_text;
                updateData[0].slug = slug;
                updateData[0].course_type = course_type;
                updateData[0].start_date = start_date;
                updateData[0].end_date = end_date;
                updateData[0].published_at = published_at;
            }
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

