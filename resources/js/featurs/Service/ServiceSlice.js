import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    services: [],
    parentServices: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'services',
    errorMess: null,
    metaInfo: []
}

/*fetch all services*/
export const fetchAllServices = createAsyncThunk("categories/fetchAllServices", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
/*fetch parent services*/

export const fetchParentServices = createAsyncThunk("categories/fetchParentServices", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get('get-parent-services')
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*create service*/

export const createServiceData = createAsyncThunk("categories/createServiceData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("services-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
/*edit service*/

export const editServiceData = createAsyncThunk("categories/editServiceData", async (id, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${id}/edit`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*show service*/

export const showServiceData = createAsyncThunk("categories/showServiceData", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*update service*/
export const updateServiceData = createAsyncThunk("categories/updateServiceData", async (data, {rejectWithValue}) => {
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

export const deleteServiceData = createAsyncThunk("categories/deleteServiceData", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const ServiceSlice = createSlice({
    name: 'categories',
    initialState: initialData,
    extraReducers: {
        [fetchAllServices.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllServices.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.services = payload;
        },
        [fetchAllServices.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [fetchParentServices.pending]: (state) => {
            state.isLoading = true
        },
        [fetchParentServices.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.parentServices = payload;
        },
        [fetchParentServices.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createServiceData.pending]: (state) => {
            state.isLoading = true
        },
        [createServiceData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.services = [...state.services, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createServiceData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [editServiceData.pending]: (state) => {
            state.isLoading = true
        },
        [editServiceData.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [editServiceData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [showServiceData.pending]: (state) => {
            state.isLoading = true
        },
        [showServiceData.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [showServiceData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [updateServiceData.pending]: (state) => {
            state.isLoading = true
        },
        [updateServiceData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                id,
                parent_id,
                title,
                slug,
                brief,
                description,
                image_link,
                type,
                meta_title,
                meta_keywords,
                meta_description,
                meta_image_link
            } = payload;

            const updateData = state.services.filter((model) => model.id === id);
            if (updateData) {
                updateData[0].parent_id = parent_id;
                updateData[0].title = title;
                updateData[0].slug = slug;
                updateData[0].brief = brief;
                updateData[0].description = description;
                updateData[0].type = type;
                updateData[0].meta_title = meta_title;
                updateData[0].meta_keywords = meta_keywords;
                updateData[0].meta_description = meta_description;
                updateData[0].meta_image_link = meta_image_link;
                updateData[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateServiceData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteServiceData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteServiceData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.services = state.services.filter((model) => model.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteServiceData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

    }
});

export default ServiceSlice.reducer;
