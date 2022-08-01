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
      localStorage.setItem("token", action.payload);
      localStorage.setItem("email", decodedToken.email);
      localStorage.setItem("ita", decodedToken.iat.toString());
      localStorage.setItem("exp", decodedToken.exp.toString());
      state.token = action.payload;
      state.email = decodedToken.email;
      state.iat = decodedToken.iat;
      state.exp = decodedToken.exp;
      state.password = decodedToken.password;
    },

    logOut:(state)=>{
      localStorage.clear();
      state.token = null;
      state.email = null;
      state.iat = null;
      state.exp = null;
    },
    checkAuth:(state)=>{
      const token  = localStorage.getItem('token')
      if(!token){
        logOut();
      }else{
        const getExp:any = localStorage.getItem('exp') 
        const getIat:any = localStorage.getItem('iat') 
        const expNumber = parseInt(getExp);
        const iatNumber = parseInt(getIat);
        const expireDate = new Date(expNumber*1000);
        if(expireDate <= new Date()){
          logOut();
        }else{
          state.token = localStorage.getItem('token')
          state.email = localStorage.getItem('email')
          state.iat  = iatNumber
          state.exp = expNumber
        }
      }

    }
  },
});

export const { setUser , logOut, checkAuth} = authSlice.actions;
export default authSlice.reducer;
