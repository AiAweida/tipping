import React, { useContext } from "react";
import { TextFeildContext } from "context";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import dollar from "images/dollar.svg";
import "./index.css";

const BillValue = () => {
  const billValue: any = useContext(TextFeildContext);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        onChange={(e) => billValue.setInputValue(e.target.value)}
        type="text"
        value={billValue.setInputValue}
        dir="rtl"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <img src={dollar} alt={"$"} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
};

export default BillValue;