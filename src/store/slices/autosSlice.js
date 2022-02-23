import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  autos: [],
};

const autosSlice = createSlice({
  name: "autos",
  initialState,
  reducers: {
    addAuto: (state, { payload }) => {
      state.autos = payload;
    },
  },
});

export const { addAuto } = autosSlice.actions;
export const getAllAutos = (state) => state.autos;
export default autosSlice.reducer;
