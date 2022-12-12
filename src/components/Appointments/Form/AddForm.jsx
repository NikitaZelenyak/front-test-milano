import Box from "@mui/material/Box";
import { Title } from "commonStyle/common.styled";
import { useState } from "react";
import { useAddAppointmentMutation } from "redux/Appointments/Appointment";
import { SubmitButton } from "components/Button/SubmitButton";
import { PickDate } from "../PickDate/PickDate";
import { PickTime } from "../PickTime/PickTime";
import { PickValue } from "../PickValue/PickValue";
import { useGetGuestsQuery } from "redux/Guests/Guests";
import { useGetStaffsQuery } from "redux/Staffs/Staffs";
import { useGetServicesQuery } from "redux/Services/Services";

export const AddForm = ({ handleClose }) => {
  const { data: guests } = useGetGuestsQuery();
  const { data: staffs } = useGetStaffsQuery();
  const { data: services } = useGetServicesQuery();

  const guestsName = guests.data.result;
  const optionsGuests =
    guestsName &&
    guestsName.map((category) => ({
      value: `${category.firstName} ${category.lastName}`,
      label: `${category.firstName} ${category.lastName}`,
    }));
  const staffsName = staffs.data.result;
  const optionsStaffs =
    staffsName &&
    staffsName.map((category) => ({
      value: `${category.firstName} ${category.lastName}`,
      label: `${category.firstName} ${category.lastName}`,
    }));
  const servicesName = services.data.result;
  const optionsServices =
    servicesName &&
    servicesName.map((category) => ({
      value: `${category.name}`,
      label: `${category.name}`,
    }));
  const [addAppointment, isUninitialized] = useAddAppointmentMutation();
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [day, setDay] = useState(currentDay);
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const [timeStart, setTimeStart] = useState("");
  const [timeEnd, setTimeEnd] = useState("");
  const [guest, setGuest] = useState("");
  const [service, setService] = useState("");
  const [staff, setStaff] = useState("");
  const date = `${day}.${month}.${year}`;
  const appointment = {
    guest,
    staff,
    service,
    date,
    timeStart,
    timeEnd,
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();

    try {
      addAppointment(appointment);
      handleClose();
    } catch (error) {}
  };

  return (
    <>
      <Title>Add Appointment</Title>
      <Box
        onSubmit={handleAddAppointment}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <PickValue
          label="Guest"
          setValue={setGuest}
          options={optionsGuests}
        ></PickValue>

        <PickDate
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
        ></PickDate>
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <PickTime setTime={setTimeStart} label="Add start time"></PickTime>
          <PickTime setTime={setTimeEnd} label="Add end time"></PickTime>
        </div>
        <PickValue
          setValue={setService}
          options={optionsServices}
          label="Service"
        ></PickValue>
        <PickValue
          options={optionsStaffs}
          setValue={setStaff}
          label="Staff"
        ></PickValue>

        <SubmitButton disabled={isUninitialized} />
      </Box>
    </>
  );
};
