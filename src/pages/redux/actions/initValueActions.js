import { createSlice } from "@reduxjs/toolkit";
import { initialState, generation, localAddress } from "../init/initValue";

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

const localAddressSlice = createSlice({
  name: "localAddress",
  initialState: localAddress,
  reducers: {},
});

export const localAddressReducer = localAddressSlice.reducer;
