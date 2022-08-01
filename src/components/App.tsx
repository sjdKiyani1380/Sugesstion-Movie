import { ThemeProvider } from "@mui/material/styles";
import theme from "../themeMUI/theme";
import { BrowserRouter, useNavigate } from "react-router-dom";
import Router from "../router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";
import { useAppDispatch } from "../app/hooks";
import {checkAuth} from "../features/authSlice"

function App() {
  const dispatch = useAppDispatch()
  useEffect(()=>{
    dispatch(checkAuth())
  },[])
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <ToastContainer />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
