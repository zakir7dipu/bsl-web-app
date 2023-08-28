import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {
    checkAuth,
    errorMessage,
    infoMessage,
    logoutUserSession,
    saveUserSession,
    successMessage
} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isAuthLoading: false,
    user: [],
    token: null,
    isAccess: false,
    errorMessage: null
}

export const fetchLogin = createAsyncThunk('authAction/fetchLogin', async (data,{rejectWithValue})=>{
    try {
        const res = await apiAccess.post('login',data)
        return res.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }
})

export const refreshLoginData = createAsyncThunk("authAction/refreshLoginData", async (arg, {rejectWithValue })=>{
    try {
        const res = await apiAccess.get('refresh')
        return res.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }
})

export const fetchLogout = createAsyncThunk('authAction/fetchLogout', async (args, {rejectWithValue})=>{
    try {
        const res = await apiAccess.post('logout')
        return res.data
    } catch (error) {
        if (!error.response) {
            throw error
        }
        return rejectWithValue(error.response.data)
    }
})


export const authSlice = createSlice({
    name: 'authAction',
    initialState: initialData,
    reducers: {
        checkAccess:(state) => {
            state.isAccess = checkAuth()
        },
        getAuthUser: (state) => state
    },
    extraReducers: {
        [fetchLogin.pending]: (state)=> {
            state.isAuthLoading= true
            infoMessage('We are processing your request.')
        },
        [fetchLogin.fulfilled]: (state, {payload}) => {
            const {user, authorisation} = payload

            state.isAuthLoading = false
            state.authUser = user
            state.token = authorisation.token
            state.isLogin = true
            saveUserSession(user, authorisation.token)
            // window.location.href = `${mainPath}/bsl/admin`
            setTimeout(()=>{
                successMessage(`${user.name} Welcome to BSL Admin Panel.`);
            },1500)
        },
        [fetchLogin.rejected]: (state, {payload}) => {
            state.isAuthLoading = false
            state.errorMessage = payload
            errorMessage(payload)
        },
        [refreshLoginData.pending]: (state)=> {
            state.isAuthLoading = true
            infoMessage('We are processing your request.')
        },
        [refreshLoginData.fulfilled]: (state, {payload})=> {
            const {status, user} = payload
            state.isAuthLoading = false
            state.user = user
            if (status !== "reject") {
                state.isLogin = true
            } else {
                state.isLogin = false
                logoutUserSession()
            }
        },
        [refreshLoginData.rejected]: (state, {payload})=> {
            state.isAuthLoading = false
            state.authErrorMessage = payload
            //errorMessage(payload)
        },
        [fetchLogout.pending]: (state)=> {
            state.isAuthLoading= true
            infoMessage('We are processing your request.')
        },
        [fetchLogout.fulfilled]: (state,) => {
            state.isAuthLoading = false
            // window.location.href = `${mainPath}/bsl/login`
            let name = state.user.name
            successMessage(`Thank you ${name}`);
            logoutUserSession()
        },
        [fetchLogout.rejected]: (state, {payload}) => {
            state.isAuthLoading = false
            state.errorMessage = payload
            errorMessage(payload)
        }
    }
})

export const {checkAccess, getAuthUser} = authSlice.actions;

export default authSlice.reducer;
