import { combineReducers } from "redux";
import { createStore } from "redux";
import { JobsReducer } from "./Jobs/Jobs-reducer";
import {filtersReducer} from './Filters/Filters-reducer'

export const store = createStore(
   combineReducers({
   JobsReducer,
   filtersReducer,
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

