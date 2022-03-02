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
  totalForTip: (totalValue: number) => void;
}
const TextInput: React.FC<textInput> = ({
  totalForTip,
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
          if (value >= 0) {
            value = +e.target.value;
            userSetBill(value);
            totalForTip(value);
          } else {
            value = 0;
            alert("Please Insert A Positive Number! ");
          }
        }}
        onKeyUp={() => {}}
        className="Text"
        type="text"
        value={value}
        id={iden}
        label={label}
        dir="rtl"
        InputProps={{
          endAdornment: (
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
