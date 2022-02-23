import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./index.css";
const InputWithIcon: React.FC<{ icon?: string; label: string }> = ({
  icon,
  label,
}) => {
  const [valueFromState, setValueFromState] = useState({});
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        onChange={(e) => setValueFromState(e.target.value)}
        className="Text"
        value={valueFromState}
        type="number"
        id="Inputwithicon"
        label={label}
        dir="rtl"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <img src={icon} alt={label} />
            </InputAdornment>
          ),
        }}
        variant="filled"
      />
    </Box>
  );
};
export default InputWithIcon;
