import React, { useContext } from "react";
import { PeopleFeildContext } from "context";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import people from "images/person.svg";
import "./index.css";

const PeopleNumber = () => {
  const { peoplenum, setPeoplenum }: any = useContext(PeopleFeildContext);
  return (
    <Box sx={{ "& > :not(style)": { m: 1 } }}>
      <TextField
        onChange={(e) => setPeoplenum(e.target.value)}
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
