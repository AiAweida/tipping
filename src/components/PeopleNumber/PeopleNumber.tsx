import React, { useContext } from "react";
import { TextFeildContext } from "context";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import people from "images/person.svg";
import "./index.css";

const PeopleNumber = () => {
  const context: any = useContext(TextFeildContext);
  console.log(context);
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        onChange={(e) => {
          context.setPeopleNumber && context.setPeopleNumber(e.target.value);
          // console.log();
        }}
        type="text"
        value={context.peopleNumber}
        dir="rtl"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <img src={people} alt={"person"} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
};

export default PeopleNumber;
