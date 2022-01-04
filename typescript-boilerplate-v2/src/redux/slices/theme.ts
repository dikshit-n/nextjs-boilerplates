import { THEME } from "@/theme";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: THEME =
  (localStorage.getItem("theme") as THEME) || "pure-light-theme";

const slice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme(_state: THEME, action: PayloadAction<THEME>) {
      return action.payload;
    },
  },
});

export const { actions: themeActions, reducer: themeReducer } = slice;
