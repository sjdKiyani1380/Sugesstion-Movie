import { configureStore } from "@reduxjs/toolkit";
import {auth} from "../api/auth"
import setUser from '../features/authSlice'

export default  configureStore({
    reducer:{
        [auth.reducerPath]: auth.reducer,
        setUser:setUser
    }
})