import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    loading : false,
    tracking : [],
    error : ''
}

export const getTrack = createAsyncThunk('track/getTrack',() => {
    const token = localStorage.getItem("token")
    const user = JSON.parse(localStorage.user)
    const userId = user.id
    console.log(token)
    return axios
    .get(`https://api-baries.cyclic.app/trackings/${userId}`,{headers :{token : token}})
    .then((respone)=> respone.data)
})
export const deleteTrack = createAsyncThunk('track/deleteTrack',(payload) => {
    const token = localStorage.getItem("token")
    console.log(payload)
    return axios
    .delete(`https://api-baries.cyclic.app/trackings/${payload}`,{headers :{token : token}})
    .then((respone)=> console.log(respone))
})

export const trackReducer = createSlice({
    name : 'track',
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getTrack.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getTrack.fulfilled, (state,action) => {
            state.loading = false
            state.track = action.payload
            state.error = ''
        })
        builder.addCase(getTrack.rejected, (state,action) => {
            state.loading = true
            state.track = []
            state.error = action.error.message
        })
        builder.addCase(deleteTrack.pending, (state) => {
            state.loading = true
        })
        builder.addCase(deleteTrack.fulfilled, (state) => {
            state.loading = false
        })
        builder.addCase(deleteTrack.rejected, (state,action) => {
            state.loading = true
            state.track = []
            state.error = action.error.message
        })
    }
})
export default trackReducer.reducer