import { combineReducers } from "redux";
import equateReducer from "./slices/EquateSlice";



export default combineReducers({
    equate: equateReducer
})