import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: null,
  userChat: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: () => initialState,
    login: (state, action) => {
      state.userInfo = action.payload;
    },
    loadChat: (state, action) => {
      state.userChat = action.payload;
    },
  },
});

export const { logout, login, loadChat } = userSlice.actions;

export default userSlice.reducer;
