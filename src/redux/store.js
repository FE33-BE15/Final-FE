import { configureStore } from "@reduxjs/toolkit";
import { artikelReducer } from "./artikelSlice";

export default configureStore({
    reducer: {
        artikel : artikelReducer
    }
})