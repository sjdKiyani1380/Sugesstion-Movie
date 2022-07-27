import React from "react";
import {
  Box,
  Button,
  Grid,
  Typography,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import { MyTextField } from "./StyleMUI";

const Form = () => {
  return (
    <div>
        <Box sx={{textAlign:"center"}}>
            <Button variant="contained" color="secondary" sx={{
                padding:"5px 40px"
            }}> go back </Button>
        </Box>
      <Box component="form">
        <Grid
          container
          justifyContent="center"
          alignItems="center"
          sx={{ height: "95vh" }}
        >
          <Grid
            item
            container
            justifyContent="center"
            direction="column"
            sx={{
              width: "50%",
              border: "2px solid #d8d8d8",
              padding: "10px 20px",
              borderRadius: "5px",
            }}
          >
            <Typography>suggestion Movie:</Typography>
            <Box sx={{ textAlign: "center" }}>
              <MyTextField
                name="suggestion"
                label="Suggestion Content ... "
                variant="standard"
              />
            </Box>
            {/*end field suggestion movie */}
            <Typography sx={{ marginTop: "30px" }}>Genre:</Typography>
            <Box>
              <FormGroup>
               <Grid direction="row" container justifyContent="center">
               <FormControlLabel
                  control={<Checkbox  />}
                  label="Action"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Drama"
                />
                <FormControlLabel
                  control={<Checkbox  />}
                  label="Documentary"
                />
               </Grid>
              </FormGroup>
            </Box>
            {/*end box Genre  */}
            <Typography sx={{ marginTop: "30px" }}>Description:</Typography>
            <Box sx={{ textAlign: "center" }}>
              <MyTextField
                name="suggestion"
                label="Description Content ... "
                rows="3"
                multiline
              />
            </Box>
            {/*end field Description movie */}
            <Box sx={{ textAlign: "center", marginTop: "50px" }}>
              <Button
                variant="contained"
                color="success"
                sx={{
                  padding: "5px 60px",
                }}
              >
                Send
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Form;
