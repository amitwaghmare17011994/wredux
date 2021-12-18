import { combineReducers, createStore } from "react_lite_store";
import { formReducer } from "./reducers/formReducer";

const rootReducer = combineReducers({ formReducer });
const store = createStore(rootReducer);
export default store;
