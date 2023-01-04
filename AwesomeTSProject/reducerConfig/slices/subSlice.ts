import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    value: 0
}


const subSlice = createSlice({
    name: 'add',
    initialState,
    reducers: {}
})


export default subSlice.reducer