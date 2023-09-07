import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    caseStudies: [],
    apiUrl: 'case-study',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllCaseStudy = createAsyncThunk("caseStudy/fetchAllCaseStudy", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${data}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchCaseStudyBySlug = createAsyncThunk("caseStudy/fetchCaseStudyBySlug", async (brand, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// create brand
export const createCaseStudy = createAsyncThunk("caseStudy/createCaseStudy", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("case-study-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateCaseStudy = createAsyncThunk("caseStudy/updateCaseStudy", async (data, {rejectWithValue}) => {
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
export const deleteCaseStudy = createAsyncThunk("caseStudy/deleteCaseStudy", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const CaseStudySlice = createSlice({
    name: "caseStudy",
    initialState: initialData,
    extraReducers: {
        [fetchAllCaseStudy.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllCaseStudy.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.caseStudies = payload;
        },
        [fetchAllCaseStudy.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [fetchCaseStudyBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchCaseStudyBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchCaseStudyBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createCaseStudy.pending]: (state) => {
            state.isLoading = true
        },
        [createCaseStudy.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.caseStudies = [...state.caseStudies, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createCaseStudy.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateCaseStudy.pending]: (state) => {
            state.isLoading = true
        },
        [updateCaseStudy.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                id,
                name,
                descriptions,
                image_link,
                clients,
                location,
                complete_date,
                technologies,
                links,
                files,
                tags
            } = payload
            const model = state.caseStudies.filter((cs) => cs.id === id);
            if (model) {
                model[0].name = name;
                model[0].descriptions = descriptions;
                model[0].image_link = image_link;
                model[0].clients = clients;
                model[0].location = location;
                model[0].complete_date = complete_date;
                model[0].technologies = technologies;
                model[0].links = links;
                model[0].files = files;
                model[0].tags = tags;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateCaseStudy.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteCaseStudy.pending]: (state) => {
            state.isLoading = true
        },
        [deleteCaseStudy.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.caseStudies = state.caseStudies.filter((cs) => cs.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteCaseStudy.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default CaseStudySlice.reducer
