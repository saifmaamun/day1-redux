import { createSlice } from "@reduxjs/toolkit"

const initialState ={
    count:10
}

const counterSlice=createSlice({
    name: "counter",
    initialState,
    reducers:{
        increment:(state)=>{
            state.count +=1;
        },
        decrement:(state)=>{
            state.count -=2;
        }
    }
})

export default counterSlice.reducer;