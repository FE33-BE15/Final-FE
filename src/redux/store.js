import { configureStore } from "@reduxjs/toolkit";
import artikelReducer  from "./artikelSlice";
import  foodReducer  from "./foodSlice";

const store =  configureStore({
    reducer: {
        artikel : artikelReducer,
        food : foodReducer,
    }
})
export default store