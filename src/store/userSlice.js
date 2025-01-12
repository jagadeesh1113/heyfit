import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    details: null,
  },
  reducers: {
    setUser: (state, action) => {
      state.details = action.payload;
    },
    removeUser: (state) => {
      state.details = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;

export default userSlice.reducer;
