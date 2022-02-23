import { createStore,combineReducers } from "@reduxjs/toolkit";
import autosReducer from "./slices/autosSlice";

const reducers = combineReducers({
  autos: autosReducer
})

export const store = createStore(reducers);
