import { combineReducers, createStore } from "./wstore/"
// import { combineReducers, createStore } from "redux"

import { reducerOne } from "./reducers/reducerOne"
import { reducerTwo } from "./reducers/reducerTwo"

const rootReducer = combineReducers({ reducerOne, reducerTwo })
const store = createStore(rootReducer)
export default store
