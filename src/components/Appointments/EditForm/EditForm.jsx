import Box from "@mui/material/Box";
import { Title } from "commonStyle/common.styled";
import { useState } from "react";
import { SubmitButton } from "components/Button/SubmitButton";
import { PickDate } from "../PickDate/PickDate";
import { PickTime } from "../PickTime/PickTime";
import { useUpdateAppointmentMutation } from "redux/Appointments/Appointment";
export const EditForm = ({ id, handleClose }) => {
  const [updateAppointment, isUninitialized] = useUpdateAppointmentMutation();
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [day, setDay] = useState(currentDay);
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const date = `${day}.${month}.${year}`;
  const appointment = {
    id,
    date,
    timeStart,
    timeEnd,
  };

  const handleAEditAppointment = async (e) => {
    e.preventDefault();
    
 
    try {
         updateAppointment(appointment);
         handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title>Edit Appointment</Title>
      <Box
        onSubmit={handleAEditAppointment}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <PickDate
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
        ></PickDate>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <PickTime setTime={setTimeStart} label="Edit start time"></PickTime>
          <PickTime setTime={setTimeEnd} label="Edit end time"></PickTime>
        </div>
        <SubmitButton disabled={isUninitialized} />
      </Box>
    </>
  );
};
