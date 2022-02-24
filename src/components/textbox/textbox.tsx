import React, { useState } from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import "./index.css";
interface textInput {
  icon?: string;
  label: string;

  iden: string;
}
const TextInput: React.FC<textInput> = ({ icon, label, iden }) => {
  const [bill, setBill] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        onChange={(e) => {
          const { value } = e.target;
          if (iden === "person") {
            setPeople(parseInt(value));
          } else {
            setBill(parseInt(value));
          }
        }}
        className="Text"
        type="number"
        value={iden === "bill" ? bill : people}
        id={iden}
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
export default TextInput;
