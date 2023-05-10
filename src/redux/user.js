import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    info: null,
    chat: null,
  },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action) => {
      state.user.info = action.payload;
    },
    loadChat: (state, action) => {
      state.user.chat = action.payload;
    },
  },
});

export const { logout, login, loadChat } = userSlice.actions;

export default userSlice.reducer;
