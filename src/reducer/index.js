import { combineReducers } from "redux"
import { houses } from "./houses"
import { loading } from "./loading"

export const rootReducer = combineReducers({
    houses,
    loading
}) 