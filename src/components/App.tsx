import { ThemeProvider } from "@mui/material/styles";
import theme from "../themeMUI/theme";
import { BrowserRouter } from "react-router-dom";
import Router from "../router/Router";

function App() {
  return (
    <div>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
         <Router />
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
