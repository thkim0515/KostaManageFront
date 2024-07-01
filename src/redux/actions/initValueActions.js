import { createSlice } from "@reduxjs/toolkit";
import { initialState, generation } from "../init/initValue";

const initSlice = createSlice({
  name: "init",
  initialState,
  reducers: {},
});

export const initReducer = initSlice.reducer;

const generationSlice = createSlice({
  name: "generation",
  initialState: generation,
  reducers: {},
});

export const generationReducer = generationSlice.reducer;
