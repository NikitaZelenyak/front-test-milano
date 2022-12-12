import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Title } from "commonStyle/common.styled";
import { useState } from "react";
import { useAddGuestMutation } from "redux/Guests/Guests";
import { SubmitButton } from "components/Button/SubmitButton";
export const AddForm = ({ handleClose }) => {
  const [addGuest, isUninitialized] = useAddGuestMutation();
  const [firstName, seFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "firstName":
        seFirstName(value);
        break;
      case "lastName":
        setLastName(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "email":
        setEmail(value);
        break;
      default:
        return;
    }
  };

  const handleAddGuest = async (e) => {
    e.preventDefault();
    const guest = {
      firstName,
      lastName,
      email,
      phone,
    };
    try {
      await addGuest(guest);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title>Add Guest</Title>
      <Box
        onSubmit={handleAddGuest}
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
          name="phone"
          id="outlined-basic"
          type="text"
          label="Phone"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          name="email"
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={handleChange}
        />
        <SubmitButton disabled={isUninitialized} />
      </Box>
    </>
  );
};
