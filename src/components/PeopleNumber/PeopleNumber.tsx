import React, { useContext } from "react";
import { TextFeildContext } from "context";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import people from "images/person.svg";
import "./index.css";

const PeopleNumber = () => {
  const handleFocus = (event: any) => event.target.select();
  const { peoplenum, setPeoplenum } = useContext(TextFeildContext);
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        onChange={(e) => setPeoplenum(+e.target.value)}
        onClick={handleFocus}
        type="text"
        value={peoplenum}
        dir="rtl"
        InputProps={{
          endAdornment: (
            <InputAdornment position="start">
              <img src={people} alt={"$"} />
            </InputAdornment>
          ),
        }}
        variant="outlined"
      />
    </Box>
  );
};

export default PeopleNumber;
