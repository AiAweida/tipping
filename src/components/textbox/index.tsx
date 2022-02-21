import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";

const InputWithIcon: React.FC<{ icon?: string; label: string }> = ({
  icon,
  label,
}) => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
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
