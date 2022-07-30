import { ThemeProvider } from "@mui/material/styles";
import theme from "../themeMUI/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
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
