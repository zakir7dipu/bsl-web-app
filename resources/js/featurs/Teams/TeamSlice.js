import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    teams: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'teams',
    errorMess: null,
    metaInfo: []
}
// all data get
export const fetchAllTeams = createAsyncThunk("ourTeam/fetchAllTeams", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const fetchTeamBySlug = createAsyncThunk("ourTeam/fetchTeamBySlug", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const createTeamData = createAsyncThunk("ourTeam/createTeamData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("teams-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateTeamData = createAsyncThunk("ourTeam/updateTeamData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const {slug, dataset} = data
        const res = await apiAccess.post(`${initialData.apiUrl}/${slug}/update`, dataset, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const deleteTeamData = createAsyncThunk("ourTeam/deleteTeamData", async (data, {rejectWithValue}) => {
    try {
        const {slug} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${slug}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const TeamSlice = createSlice({
    name: 'ourTeam',
    initialState: initialData,
    extraReducers: {
        [fetchAllTeams.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllTeams.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.teams = payload;
        },
        [fetchAllTeams.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [fetchTeamBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchTeamBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchTeamBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createTeamData.pending]: (state) => {
            state.isLoading = true
        },
        [createTeamData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.teams = [...state.teams, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createTeamData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateTeamData.pending]: (state) => {
            state.isLoading = true
        },
        [updateTeamData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                name,
                designation,
                phone,
                email,
                linkedin,
                website,
                twitter,
                slug,
                avatar,
                index_of,
                id
            } = payload;

            const updateData = state.teams.filter((team) => team.slug === slug);
            if (updateData) {
                updateData[0].name = name;
                updateData[0].designation = designation;
                updateData[0].phone = phone;
                updateData[0].email = email;
                updateData[0].linkedin = linkedin;
                updateData[0].website = website;
                updateData[0].twitter = twitter;
                updateData[0].avatar = avatar;
                updateData[0].slug = slug;
                updateData[0].index_of = index_of;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateTeamData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteTeamData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteTeamData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {slug} = payload
            state.teams = state.teams.filter((team) => team.slug !== slug);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteTeamData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default TeamSlice.reducer;
