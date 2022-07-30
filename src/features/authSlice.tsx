import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode";

interface AuthState {
  token: string | null;
  email: string | null;
  password: string | null;
  iat: number | null;
  exp: number | null;
}

interface InfoToken {
  email: string;
  password: string;
  iat: number;
  exp: number;
}

export const initialState: AuthState = {
  token: null,
  email: null,
  iat: null,
  exp: null,
  password: null,
};

export const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    setUser: (state, action) => {
      const decodedToken: InfoToken = jwtDecode(action.payload);
      console.log(decodedToken);
      localStorage.setItem("token", action.payload);
      localStorage.setItem("email", decodedToken.email);
      localStorage.setItem("password", decodedToken.password);
      localStorage.setItem("ita", decodedToken.iat.toString());
      localStorage.setItem("exp", decodedToken.exp.toString());
      state.token = action.payload;
      state.email = decodedToken.email;
      state.iat = decodedToken.iat;
      state.exp = decodedToken.exp;
      state.password = decodedToken.password;
    },
  },
});

export const { setUser } = authSlice.actions;
export default authSlice.reducer;
