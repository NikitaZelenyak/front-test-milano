import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useState } from "react";
import { useUpdateStatusAppointmentMutation } from "redux/Appointments/Appointment";
export const SwitchButton = ({ id }) => {
  const [confirm, setConfirm] = useState(false);
  const [updateStatus] = useUpdateStatusAppointmentMutation();
  const data = {
    id,
    confirm,
  };
  console.log(data);
  const handlerChecked = () => {
    try {
      setConfirm(!confirm);
      updateStatus(data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <FormGroup>
      <FormControlLabel
        onChange={handlerChecked}
        checked={confirm}
        control={<Switch defaultChecked />}
        label="Confirm"
      />
    </FormGroup>
  );
};
