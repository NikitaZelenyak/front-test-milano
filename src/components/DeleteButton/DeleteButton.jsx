import * as React from "react";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useRemoveAppointmentMutation } from "redux/Appointments/Appointment";
export const DeleteButton = ({ id }) => {
  const [removeAppointment, { isLoading }] = useRemoveAppointmentMutation();
  const deleteAppointment = (id) => {
    removeAppointment(id);
  };
  return (
    <Stack direction="row" alignItems="center" spacing={1}>
      <IconButton
        disabled={isLoading}
        onClick={() => deleteAppointment(id)}
        aria-label="delete"
        size="large"
      >
        <DeleteIcon fontSize="inherit" />
      </IconButton>
    </Stack>
  );
};
