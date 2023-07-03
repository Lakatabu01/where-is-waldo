import { createSlice } from "@reduxjs/toolkit";

interface ReloadState {
  value: {
    reload: boolean;
  };
}

const initialState: ReloadState = {
  value: {
    reload: false,
  },
};

export const reloadSlice = createSlice({
  name: "set",
  initialState,
  reducers: {
    check: (state, action) => {
      state.value.reload = action.payload.reload;
    },
  },
});

export const { check } = reloadSlice.actions;
export default reloadSlice.reducer;
