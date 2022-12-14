import { createSlice } from "@reduxjs/toolkit";
const initialAuth = {
  auth: false,
};
const authSlice = createSlice({
  name: "authentication",
  initialState: initialAuth,
  reducers: {
    login(state) {
      state.auth = true;
    },
    logout(state) {
      state.auth = false;
    },
  },
});
export const authActions = authSlice.actions;

export default authSlice.reducer;
