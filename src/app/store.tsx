import { configureStore } from "@reduxjs/toolkit";
import { auth } from "../api/auth";
import setUser from "../features/authSlice";

const store = configureStore({
  reducer: {
    [auth.reducerPath]: auth.reducer,
    setUser: setUser,
  },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
