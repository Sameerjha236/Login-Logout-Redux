import { createSlice } from "@reduxjs/toolkit";

const intialStateValue = "White";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: intialStateValue },
  reducers: {
    changeColor: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColor } = themeSlice.actions;

export default themeSlice.reducer;
