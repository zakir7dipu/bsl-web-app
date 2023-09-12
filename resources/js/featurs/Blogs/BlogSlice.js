import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import Api from "../../lib/api.js";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    blogs: [],
    paginateBlogs: [],
    lastPage: 0,
    currentPage: 1,
    perPage: 0,
    total: 0,
    apiUrl: 'blogs',
    errorMess: null,
    metaInfo: []
}

// all data get
export const fetchAllBlogs = createAsyncThunk("blogsData/fetchAllBlogs", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${data}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})
export const fetchBlogsDataBySlug = createAsyncThunk("blogsData/fetchBlogsDataBySlug", async (brand, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// create brand
export const createBlogsData = createAsyncThunk("blogsData/createBlogsData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("blogs-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

export const updateBlogsData = createAsyncThunk("blogsData/updateBlogsData", async (data, {rejectWithValue}) => {
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
export const deleteBlogsData = createAsyncThunk("blogsData/deleteBlogsData", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

// Frontend blogs function

export const fetchAllBlogsData = createAsyncThunk("blogsData/fetchAllBlogsData", async (data, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get("blogs-all")
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})

export const fetchAllBlogsByPage = createAsyncThunk("blogsData/fetchAllBlogsByPage", async (data, {rejectWithValue}) => {
    try {
        const {page} = data
        const res = await apiAccess.get(`blogs-all?page=${page}`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.message)
    }
})


export const BlogSlice = createSlice({
    name: "blogsData",
    initialState: initialData,
    extraReducers: {
        [fetchAllBlogs.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllBlogs.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.blogs = payload;
        },
        [fetchAllBlogs.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [fetchBlogsDataBySlug.pending]: (state) => {
            state.isLoading = true
        },
        [fetchBlogsDataBySlug.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [fetchBlogsDataBySlug.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createBlogsData.pending]: (state) => {
            state.isLoading = true
        },
        [createBlogsData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.blogs = [...state.blogs, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createBlogsData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [updateBlogsData.pending]: (state) => {
            state.isLoading = true
        },
        [updateBlogsData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                title,
                slug,
                tag,
                description,
                image_link,
                short_order,
                meta_title,
                meta_description,
                meta_keywords,
                meta_image_link,
                id
            } = payload
            const model = state.blogs.filter((blog) => blog.id === id);
            if (model) {
                model[0].title = title;
                model[0].slug = slug;
                model[0].tag = tag;
                model[0].description = description;
                model[0].image_link = image_link;
                model[0].short_order = short_order;
                model[0].meta_title = meta_title;
                model[0].meta_description = meta_description;
                model[0].meta_keywords = meta_keywords;
                model[0].meta_image_link = meta_image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateBlogsData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteBlogsData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteBlogsData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.blogs = state.blogs.filter((blog) => blog.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteBlogsData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [fetchAllBlogsData.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllBlogsData.fulfilled]: (state, {payload}) => {
            const {data, last_page, current_page, per_page, path, total} = payload;
            console.log(last_page)
            state.isLoading = false
            state.paginateBlogs = data
            state.lastPage = last_page > 1 ? last_page:0
            state.currentPage = current_page
            state.total = total
            state.perPage = per_page
            state.apiUrl = path
            state.errorMess = null
        },
        [fetchAllBlogsData.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.paginateBlogs = []
            state.errorMess = {payload}
        },

        [fetchAllBlogsByPage.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllBlogsByPage.fulfilled]: (state, {payload}) => {
            const {data, last_page, current_page, per_page, path, total} = payload
            state.isLoading = false
            state.paginateBlogs = data
            state.lastPage = last_page
            state.currentPage = current_page
            state.total = total
            state.perPage = per_page
            state.apiUrl = path
            state.errorMess = null
        },
        [fetchAllBlogsByPage.rejected]: (state, {payload}) => {
            state.isLoading = false
            state.paginateBlogs = []
            state.errorMess = payload
        },
    }
});

export default BlogSlice.reducer
