import Api from "../../lib/api.js";
import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {errorMessage, successMessage} from "../../lib/helper.js";

const {apiAccess} = new Api();

const initialData = {
    isLoading: true,
    products: [],
    services: [],
    apiUrl: 'products',
    errorMess: null,
    metaInfo: []
}

/*fetch all services*/
export const fetchAllProduct = createAsyncThunk("serviceProduct/fetchAllProduct", async (arg, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(initialData.apiUrl)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*create service*/

export const createProductData = createAsyncThunk("serviceProduct/createProductData", async (data, {rejectWithValue}) => {
    try {
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
        const res = await apiAccess.post("products-store", data, config)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*show service*/
export const showProductData = createAsyncThunk("serviceProduct/showProductData", async (slug, {rejectWithValue}) => {
    try {
        const res = await apiAccess.get(`${initialData.apiUrl}/${slug}/show`);
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})

/*update service*/
export const updateProductData = createAsyncThunk("serviceProduct/updateProductData", async (data, {rejectWithValue}) => {
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

export const deleteProductData = createAsyncThunk("serviceProduct/deleteProductData", async (data, {rejectWithValue}) => {
    try {
        const {id} = data
        const res = await apiAccess.delete(`${initialData.apiUrl}/${id}/destroy`)
        return res.data
    } catch (error) {
        return rejectWithValue(error.response.data)
    }
})


export const ProductSlice = createSlice({
    name: 'serviceProduct',
    initialState: initialData,
    extraReducers: {
        [fetchAllProduct.pending]: (state) => {
            state.isLoading = true
        },
        [fetchAllProduct.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            const {products, services} = payload;
            state.products = products;
            state.services = services;
        },
        [fetchAllProduct.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [createProductData.pending]: (state) => {
            state.isLoading = true
        },
        [createProductData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            state.products = [...state.products, payload]
            state.errorMess = null
            successMessage("Data Created Successfully")
        },
        [createProductData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [showProductData.pending]: (state) => {
            state.isLoading = false
        },
        [showProductData.fulfilled]: (state, {payload}) => {
            state.isLoading = false;
            state.metaInfo = payload;
        },
        [showProductData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
        },

        [updateProductData.pending]: (state) => {
            state.isLoading = true
        },
        [updateProductData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {
                id,
                service_id,
                title,
                brief,
                description,
                image_link,
            } = payload;

            const updateData = state.products.filter((model) => model.id === id);
            if (updateData) {
                updateData[0].service_id = service_id;
                updateData[0].title = title;
                updateData[0].brief = brief;
                updateData[0].description = description;
                updateData[0].image_link = image_link;
            }
            state.errorMess = null
            successMessage("Data Updated Successfully")
        },
        [updateProductData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },

        [deleteProductData.pending]: (state) => {
            state.isLoading = true
        },
        [deleteProductData.fulfilled]: (state, {payload}) => {
            state.isLoading = false
            const {id} = payload
            state.products = state.products.filter((model) => model.id !== id);
            state.errorMess = null
            successMessage("Data Deleted Successfully")
        },
        [deleteProductData.rejected]: (state, {payload}) => {
            state.isLoading = false;
            state.message = payload;
            errorMessage(payload)
        },
    }
});

export default ProductSlice.reducer;
