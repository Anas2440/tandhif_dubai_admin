import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    ManageId: null,
    ColorId: null,
    YearId: null,
  },
  reducers: {
    ManageCarData: (state, action) => {
      state.ManageId = action.payload;
    },
    ManageCarDataRemove: (state) => {
      state.ManageId = null;
    },

    CarColorData: (state, action) => {
      state.ColorId = action.payload;
    },
    CarColorDataRemove: (state) => {
      state.ColorId = null;
    },
    ModelYearData: (state, action) => {
      state.YearId = action.payload;
    },
    ModelYearDataRemove: (state) => {
      state.YearId = null;
    },
  },
});

export const {
  ManageCarData,
  ManageCarDataRemove,
  CarColorData,
  CarColorDataRemove,
  ModelYearData,
  ModelYearDataRemove,
} = authSlice.actions;

export default authSlice.reducer;
