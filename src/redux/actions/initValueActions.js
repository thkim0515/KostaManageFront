import { createSlice } from "@reduxjs/toolkit";
import { localAddress } from "../init/initValue";

const localAddressSlice = createSlice({
  name: "localAddress",
  initialState: localAddress,
  reducers: {},
});

export const localAddressReducer = localAddressSlice.reducer;
