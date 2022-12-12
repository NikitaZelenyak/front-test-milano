import { Container } from "Container/Container";
import { Appointment } from "./Appointment/Appointment";
import { useGetAppointmentsQuery } from "redux/Appointments/Appointment";
import { useState } from "react";
import { TransitionsModal } from "components/Modal/Modal";
import { PickDate } from "./PickDate/PickDate";
import toast, { Toaster } from "react-hot-toast";
import { AddForm } from "./Form/AddForm";

export const Appointments = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  const [day, setDay] = useState(currentDay);
  const [month, setMonth] = useState(currentMonth);
  const [year, setYear] = useState(currentYear);
  const date = {
    day,
    month,
    year,
  };
  const { data, isError } = useGetAppointmentsQuery(date);
  const appointments = data?.data?.result;
  toast.error("You don't have any appointment on this date");
  return (
    <>
      {isError && (
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 2000,
            style: {
              background: "#363636",
              color: "#fff",
            },
          }}
        />
      )}
      <Container list="Appointments">
        <PickDate
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
        ></PickDate>
        {appointments ? (
          appointments.map((appointment) => (
            <Appointment
              key={appointment._id}
              appointment={appointment}
            ></Appointment>
          ))
        ) : (
          <p>You don't have any appointments at this date</p>
        )}
        <TransitionsModal
          open={open}
          handleOpen={handleOpen}
          handleClose={handleClose}
        >
          <AddForm handleClose={handleClose} />
        </TransitionsModal>
      </Container>
    </>
  );
};
