import { configureStore } from "@reduxjs/toolkit";
import artikelReducer  from "./artikelSlice";
import  foodReducer  from "./foodSlice";
import  trackReducer  from "./trackSlice";
import authSlice from "./authSlice";

const store =  configureStore({
    reducer: {
        artikel : artikelReducer,
        food : foodReducer,
        track : trackReducer,
        user : authSlice
    }
})
export default store