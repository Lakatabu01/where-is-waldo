import { createSlice } from "@reduxjs/toolkit";

interface FoundState {
  value: {
    found: number;
  };
}

const initialState: FoundState = {
  value: {
    found: 0,
  },
};

export const characterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    start: (state, action) => {
      state.value.found = action.payload.found;
    },
  },
});

export const { start } = characterSlice.actions;
export default characterSlice.reducer;
