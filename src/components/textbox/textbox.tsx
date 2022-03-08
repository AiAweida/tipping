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
  userSetBill: (newValue: number) => void;
}
const handleFocus = (event: any) => event.target.select();
const TextInput: React.FC<textInput> = ({
  userSetBill,
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
          userSetBill(value);
        }}
        onKeyUp={() => {
          if (value >= 0 && iden === "bill") {
            userSetBill(value);
          } else if (value >= 0 && iden === "people") {
            userSetBill(value);
          } else {
            alert("Please Insert A Vailed number of " + iden);
            userSetBill(1);
          }
        }}
        onClick={handleFocus}
        type="text"
        value={value}
        id={iden}
        dir="rtl"
        placeholder="Custom"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <img src={icon} alt={label} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
};
export default TextInput;
