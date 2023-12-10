import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {errorMessage, successMessage} from "@/lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    workshops: [],
    hosts: [],
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

export const createWorkshopSeminarData = createAsyncThunk("workshopSeminar/createWorkshopSeminarData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }

        const res = await apiAccess.post("workshops-store", data, config)
        console.log(res.data)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const showWorkshopSeminar = createAsyncThunk("workshopSeminar/showWorkshopSeminar", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const getSeminarHosts = createAsyncThunk("workshopSeminar/getSeminarHosts", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/hosts`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const showWorkshopSeminarById = createAsyncThunk("workshopSeminar/showWorkshopSeminarById", async (id, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${id}/edit`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateWorkshopSeminarData = createAsyncThunk("workshopSeminar/updateWorkshopSeminarData", async (data, {rejectWithValue}) => {
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

export const deleteWorkshopSeminar = createAsyncThunk("workshopSeminar/deleteWorkshopSeminar", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
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

        [createWorkshopSeminarData.pending]: (state) => {
            state.isLoading = true
        },
        [createWorkshopSeminarData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.workshops = [...state.workshops, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createWorkshopSeminarData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [showWorkshopSeminar.pending]: (state) => {
            state.isLoading = false
            state.metaInfo = []
        },
        [showWorkshopSeminar.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [showWorkshopSeminar.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },


        [getSeminarHosts.pending]: (state) => {
            state.isLoading = true
        },
        [getSeminarHosts.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.hosts = payload;
        },
        [getSeminarHosts.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.hosts = payload;
        },

        [showWorkshopSeminarById.pending]: (state) => {
           state.isLoading = false;
            state.message = payload;
        },
        [showWorkshopSeminarById.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [showWorkshopSeminarById.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [updateWorkshopSeminarData.pending]: (state) => {
            state.isLoading = true
        },
        [updateWorkshopSeminarData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.metaInfo = payload;
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateWorkshopSeminarData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteWorkshopSeminar.pending]: (state) => {
            state.isLoading = true
        },
        [deleteWorkshopSeminar.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {slug} = payload
            state.workshops = state.workshops.filter((model) => model.slug !== slug);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteWorkshopSeminar.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

    }
});


export default WorkshopSlice.reducer;
