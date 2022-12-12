import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";

export const PickTime = ({ label, setTime }) => {
  const handleChange = (e) => {
    const { value } = e.target;
    setTime(`${value}`);
  };

  return (
    <Stack component="form" noValidate spacing={3}>
      <TextField
        id="time"
        name="time"
        label={label}
        onChange={handleChange}
        type="time"
        defaultValue="00:00"
        InputLabelProps={{
          shrink: true,
        }}
        inputProps={{
          step: 300, 
        }}
        sx={{ width: 150 }}
      />
    </Stack>
  );
};
