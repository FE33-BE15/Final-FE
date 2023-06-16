import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading : false,
    food : [],
    error : '',
}
export const getFood = createAsyncThunk('food/getFood',() => {
    return axios
    .get(`http://localhost:3000/foods`)
    .then((response) => response.data)
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
    }
})
export default foodReducer.reducer