import { createTheme } from "@mui/material/styles";

export const colors = {
  red: "rgb(255,0,0)",
  blue: "rgb(0,0,255)",
  green: "rgb(0,255,0)",
  silver: "#d8d8d8",
  sliverLight:"#e3f2fd"
};



const theme = createTheme({
    palette:{
        primary:{
            main:colors.blue
        },
        secondary:{
            main:colors.red
        },

        
    }
})

export default theme;