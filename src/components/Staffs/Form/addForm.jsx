import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Title } from "commonStyle/common.styled";
import { useState } from "react";
import { useAddStaffMutation } from "redux/Staffs/Staffs";
import { SubmitButton } from "components/Button/SubmitButton";
export const AddForm = ({ handleClose }) => {
  const [addStaff, isUninitialized] = useAddStaffMutation();
  const [firstName, seFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        seFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "jobTitle":
        setJobTitle(value);
        break;
      default:
        return;
    }
  };

  const handleAddStaff = async (e) => {
    e.preventDefault();

    const staff = {
      firstName,
      lastName,
      jobTitle,
    };
    try {
      await addStaff(staff);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title>Add Staff</Title>
      <Box
        onSubmit={handleAddStaff}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          name="firstName"
          id="outlined-basic"
          type="text"
          label="First Name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          name="lastName"
          id="outlined-basic"
          type="text"
          label="Last Name"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          name="jobTitle"
          id="outlined-basic"
          type="text"
          label="Job Title"
          variant="outlined"
          onChange={handleChange}
        />

        <SubmitButton disabled={isUninitialized} />
      </Box>
    </>
  );
};
