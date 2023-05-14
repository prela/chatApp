import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {
    info: null,
    chat: {
      id: null,
      messages: [],
    },
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
      state.user.chat.id = action.payload.id;
    },
    setMessages: (state, action) => {
      state.user.chat.messages.push(action.payload);
    },
  },
});

export const { logout, login, loadChat, setMessages } = userSlice.actions;

export default userSlice.reducer;
