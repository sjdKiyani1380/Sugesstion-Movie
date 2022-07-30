import { createSlice } from "@reduxjs/toolkit";
import jwtDecode from "jwt-decode"

interface AuthState{
    token:string | null,
    email:string | null,
}

export const initialState:AuthState = {
    token:'klasdjflkjaskldjflkjasdf',
    email:null
}


export const authSlice = createSlice({
    name:"authSlice",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            const decodedToken = jwtDecode(action.payload)
            state.token = 'ali mohammadi kia'
            // console.log(state.token)
        }
    }
})

export const {setUser} = authSlice.actions;
export default authSlice.reducer;