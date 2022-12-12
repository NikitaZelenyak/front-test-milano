import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { useState } from "react";

export const PickDate = ({ setDay, setMonth, setYear }) => {
  const currentDate = new Date();

  const [value, setValue] = useState(dayjs(currentDate));

  const handleChange = (newValue) => {
    setValue(newValue);
    setDay(newValue.$D);
    setMonth(newValue.$M + 1);
    setYear(newValue.$y);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Stack spacing={3}>
        <DesktopDatePicker
          minDate={currentDate}
          label="Chose date"
          inputFormat="DD/MM/YYYY"
          value={value}
          onChange={handleChange}
          renderInput={(params) => <TextField {...params} />}
        />
      </Stack>
    </LocalizationProvider>
  );
};
