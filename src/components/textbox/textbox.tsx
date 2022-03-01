import React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./index.css";
interface textInput {
  icon?: string;
  label: string;
  iden: string;
  value: number;
  tempo: (newValue: number) => void;
}
const TextInput: React.FC<textInput> = ({
  tempo,
  value,
  icon,
  label,
  iden,
}) => {
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        onChange={(e) => {
          value = +e.target.value;
          tempo(value);
        }}
        className="Text"
        type="number"
        value={value}
        id={iden}
        label={label}
        // dir="rtl"
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
export default TextInput;
