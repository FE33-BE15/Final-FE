import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading : false,
    food : [],
    error : '',
}
const token = localStorage.getItem("token")
export const getFood = createAsyncThunk('food/getFood',() => {
    return axios
    .get(`https://api-baries.cyclic.app/foods`)
    .then((response) => response.data)
} )
export const postFood = createAsyncThunk('food/postFood',(payload) => {
    return axios
    .post(`https://api-baries.cyclic.app/trackings/${payload} `,{},{headers :{token : token }})
    .then((response) => console.log(response))
} )

export const foodReducer = createSlice({
    name : "food",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getFood.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getFood.fulfilled, (state,action) => {
            state.loading = false
            state.food = action.payload
            state.error = ''
        })
        builder.addCase(getFood.rejected, (state,action) => {
            state.loading = true
            state.food = []
            state.error = action.error.message
        })
        builder.addCase(postFood.pending, (state) => {
            state.loading = true
        })
        builder.addCase(postFood.fulfilled, (state) => {
            state.loading = false
            state.error = ''
        })
        builder.addCase(postFood.rejected, (state,action) => {
            state.loading = true
            state.food = []
            state.error = action.error.message
        })
    }
})
export default foodReducer.reducer