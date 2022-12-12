import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Title } from "commonStyle/common.styled";
import { useState } from "react";
import { useAddServiceMutation } from "redux/Services/Services";
import { SubmitButton } from "components/Button/SubmitButton";
export const AddForm = ({ handleClose }) => {
  const [addService, isUninitialized] = useAddServiceMutation();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "name":
        setName(value);
        break;
      case "category":
        setCategory(value);
        break;
      case "price":
        setPrice(value);
        break;
      default:
        return;
    }
  };

  const handleAddService = async (e) => {
    e.preventDefault();

    const service = {
      name,
      category,
      price,
    };
    try {
      await addService(service);
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Title>Add Service</Title>
      <Box
        onSubmit={handleAddService}
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "100%" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          autoFocus
          name="name"
          id="outlined-basic"
          type="text"
          label="Name of service"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          name="category"
          id="outlined-basic"
          type="text"
          label="Type of service"
          variant="outlined"
          onChange={handleChange}
        />
        <TextField
          name="price"
          id="outlined-basic"
          type="number"
          label="Price"
          variant="outlined"
          onChange={handleChange}
        />

        <SubmitButton disabled={isUninitialized} />
      </Box>
    </>
  );
};
