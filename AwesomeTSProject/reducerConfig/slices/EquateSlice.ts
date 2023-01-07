import { createSlice, createSelector } from "@reduxjs/toolkit";

const initialState = {
    value: 0,
    expression: '',
    error: ''
}


const equateSlice = createSlice({
    name: 'result',
    initialState,
    reducers: {
        equate: (state, action) => {
            state.value = action.payload.value
            state.expression = action.payload.expression
            state.error = action.payload.error
            console.log('action', action.payload)
        },
    },
    extraReducers: {

    }
})

export const { equate } = equateSlice.actions

// const getResultState = (state) => state.result

// export const getResult = createSelector(getResultState,
//     (result) => result.value)
// export const getExpression = createSelector(getResultState,
//     (result) => result.expression)
// export const getErrorMessage = createSelector(getResultState,
//     (result) => result.error)



export default equateSlice.reducer