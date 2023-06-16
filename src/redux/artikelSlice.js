import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
    loading: false,
    artikel : [],
    error : '',
}
export const getArtikel = createAsyncThunk('artikel/getArtikel',() =>{
    return axios
    .get('https://api-baries.cyclic.app/articles')
    .then((Response) => Response.data)
})
export const artikelReducer = createSlice({
    name : "artikel",
    initialState,
    extraReducers : (builder) => {
        builder.addCase(getArtikel.pending, (state) => {
            state.loading = true
        })
        builder.addCase(getArtikel.fulfilled, (state,action) => {
            state.loading = false
            state.artikel = action.payload
            state.error = ''
        })
        builder.addCase(getArtikel.rejected, (state,action) => {
            state.loading = true
            state.artikel = []
            state.error = action.error.message
        })
    }
})
export default artikelReducer.reducer