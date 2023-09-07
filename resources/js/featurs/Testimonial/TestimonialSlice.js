import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    testimonials: [],
    apiUrl: 'testimonial',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllTestimonial = createAsyncThunk("testimonialData/fetchAllTestimonial", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${data}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchTestimonialBySlug = createAsyncThunk("testimonialData/fetchTestimonialBySlug", async (brand, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// create brand
export const createTestimonial = createAsyncThunk("testimonialData/createTestimonial", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("testimonial-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateTestimonial = createAsyncThunk("testimonialData/updateTestimonial", async (data, {rejectWithValue}) => {
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
export const deleteTestimonial = createAsyncThunk("testimonialData/deleteTestimonial", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const TestimonialSlice = createSlice({
    name: "testimonialData",
    initialState: initialData,
    extraReducers: {
        [fetchAllTestimonial.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllTestimonial.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.testimonials = payload;
        },
        [fetchAllTestimonial.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [fetchTestimonialBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchTestimonialBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchTestimonialBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createTestimonial.pending]: (state) => {
            state.isLoading = true
        },
        [createTestimonial.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.testimonials = [...state.testimonials, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createTestimonial.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateTestimonial.pending]: (state) => {
            state.isLoading = true
        },
        [updateTestimonial.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                id,
                name,
                designation,
                description,
                image_link
            } = payload
            const model = state.testimonials.filter((cs) => cs.id === id);
            if (model) {
                model[0].name = name;
                model[0].designation = designation;
                model[0].description = description;
                model[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateTestimonial.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteTestimonial.pending]: (state) => {
            state.isLoading = true
        },
        [deleteTestimonial.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.testimonials = state.testimonials.filter((ts) => ts.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteTestimonial.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default TestimonialSlice.reducer
