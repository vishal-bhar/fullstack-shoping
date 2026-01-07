import Product from "@/pages/Product";
import { createSlice } from "@reduxjs/toolkit";


const productSlice=createSlice({
    name:"product",
    initialState:{
        product:[]
    },
    reducers:{
        setProducts:(state,action)=>{
            state.product=action.payload;
        },
    }
})

export const {setProducts}=productSlice.actions;

export default productSlice.reducer;