import { createSlice } from "@reduxjs/toolkit";

interface userState {
  userToken: string;
  signUpsucces: boolean;
  isLoading: boolean;
}
const initialState: userState = {
  userToken: "",
  signUpsucces: false,
  isLoading: false,
};
export const userSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoading = true;
    },
    loginSuccess: (state, action) => {
      console.log(action.payload)
      state.userToken = action.payload;
      state.isLoading = false;
    },
    loginFailure: (state) => {
      state.isLoading = false;
    },
    signup: (state, action) => {
      state.isLoading = true;
    },
    signupSuccess: (state, action) => {
      state.isLoading = false;
      state.signUpsucces = true;
    },
    signupFailure: (state, action) => {
      state.isLoading = false;
      console.log("sai r ne", action)
    },
  },
});

export const { login, loginSuccess, loginFailure, signup, signupFailure, signupSuccess } = userSlice.actions;
export default userSlice.reducer;
