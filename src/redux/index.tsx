import { configureStore } from "@reduxjs/toolkit";
import {auth} from "../api/auth"
export default  configureStore({
    reducer:{
        [auth.reducerPath]: auth.reducer,
    }
})