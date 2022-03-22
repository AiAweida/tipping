import React, { useContext } from "react";
import { TextFeildContext } from "context";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import dollar from "images/dollar.svg";
import "./index.css";

const BillValue = () => {
  const handleFocus = (event: any) => event.target.select();
  const { billValue, setBillValue } = useContext(TextFeildContext);
  return (
    <Box>
      <TextField
        onChange={(e) => setBillValue(+e.target.value)}
        onClick={handleFocus}
        type="text"
        value={billValue}
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
