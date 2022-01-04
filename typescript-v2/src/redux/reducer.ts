import { combineReducers } from "@reduxjs/toolkit";
import { authReducer } from ".";

export const reducer = combineReducers({
  auth: authReducer,
});
