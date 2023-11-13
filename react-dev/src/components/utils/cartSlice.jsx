import { createSlice } from "@reduxjs/toolkit";

const cartslice = createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItems:(state,action)=>{
            state.items.push(action.payload)
        },
        removeItem:(state)=>{
            state.items.pop();
        },
        clearCart:(state)=>{
            state.items = []
        }
    }
})
export const {addItems,removeItem,clearCart} = cartslice.actions;
export default cartslice.reducer;