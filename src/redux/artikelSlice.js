import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getArtikelAsync = createAsyncThunk(
	'artikel/getArtikelAsync',
	async () => {
		const resp = await fetch('https://64550599a74f994b334fc3e6.mockapi.io/article');
		if (resp.ok) {
			const artikel = await resp.json();
			return { artikel };
		}
	}
);
export const artikelReducer = createSlice({
    name : "artikel",
    initialState : [],
    reducers : {
        
    },
    extraReducers : {
        [getArtikelAsync.fulfilled] : (state, Action) => {
            return Action.payload.artikel;
        }
    }
});
export default artikelReducer.reducer