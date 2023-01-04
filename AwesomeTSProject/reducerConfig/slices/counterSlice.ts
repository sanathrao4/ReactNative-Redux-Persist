import { createSlice, createAsyncThunk, createSelector } from "@reduxjs/toolkit";
// import fetch from "node-fetch";
import axios from 'axios';
const initialState = {
    value: 0
}


const url = 'https://catfact.ninja/fact';


export const getJson = createAsyncThunk(
    'getJson', async () => {
        axios.get(url).then((resp) => { console.log('res', resp.data) }).catch((err) => { console.log('err', err) })
    }
)

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: {
        addValue: (state) => {
            state.value = state.value + 1
        },
        subValue: (state) => {
            state.value = state.value - 1
        },
        mulValue: (state) => {
            state.value = state.value * 2
        },
        divValue: (state) => {
            state.value = state.value / 2
        },
        addHundred: (state, action) => {
            state.value = state.value + action.payload
        }
    },
    extraReducers: {
        [getJson.pending]: (state, action) => {
            console.log('pending', action)
        },
        [getJson.fulfilled]: (state, action) => {
            console.log('fulfilled', action)
        },
        [getJson.rejected]: (state, action) => {
            console.log('rejected', action)
        }
    }
})

export const { addValue, subValue, mulValue, divValue, addHundred } = counterSlice.actions

const getCounterValue = (state) => state.counter
export const getCounter = createSelector(getCounterValue,
    (counter) => counter.value)

export default counterSlice.reducer