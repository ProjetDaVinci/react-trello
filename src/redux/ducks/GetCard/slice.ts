import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: number = -1;

const localCardSlice = createSlice({
  name: "localCard",
  initialState,
  reducers: {
    getCardClickId(state, { payload }: PayloadAction<number>) {
      state = payload;
      return state;
    },
  },
});

const actions = { ...localCardSlice.actions };
const reducer = localCardSlice.reducer;

export { actions, reducer };
