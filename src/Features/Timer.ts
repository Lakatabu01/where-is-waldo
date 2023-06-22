import { createSlice } from "@reduxjs/toolkit";

interface TimerState {
  value: {
    seconds: number;
    isRunning: boolean;
  };
}

const initialState: TimerState = {
  value: {
    seconds: 0,
    isRunning: true,
  },
};

export const timerSlice = createSlice({
  name: "timer",
  initialState,
  reducers: {
    start: (state, action) => {
      state.value.seconds = action.payload.seconds;
      state.value.isRunning = action.payload.isRunning;
    },
  },
});

export const { start } = timerSlice.actions;
export default timerSlice.reducer;
