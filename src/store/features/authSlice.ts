import { IAUTH, IUSER } from "@/types/interface";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: IAUTH = {
  accessToken: null,
  user: null,
  isInitialized: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (
      state,
      action: PayloadAction<{ accessToken: string; user: IUSER }>
    ) => {
      state.accessToken = action.payload.accessToken;
      state.user = action.payload.user;
      state.isInitialized = true;
    },
    setUser: (state, action: PayloadAction<IUSER>) => {
      state.user = action.payload;
    },
    setInitialized: (state, action) => {
      state.isInitialized = action.payload;
    },
    logout: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isInitialized = false;
    },
    updateAvatar: (state, action: PayloadAction<string>) => {
      if (state.user) {
        state.user.avatar = action.payload;
      }
    },
    signOut: (state) => {
      state.accessToken = null;
      state.user = null;
      state.isInitialized = false;
    },
  },
});

export const {
  setCredentials,
  logout,
  setUser,
  setInitialized,
  updateAvatar,
  signOut,
} = authSlice.actions;
export default authSlice.reducer;
