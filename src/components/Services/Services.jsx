import { Container } from "Container/Container";
import { Service } from "./Service/Service";
import { useGetServicesQuery } from "redux/Services/Services";
import { TransitionsModal } from "components/Modal/Modal";
import { AddForm } from "./Form/addForm";
import { useState } from "react";
export const Services = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data } = useGetServicesQuery();

  const services = data?.data?.result;

  return (
    <Container list="Services">
      {services &&
        services.map((service) => (
          <Service key={service._id} service={service}></Service>
        ))}
      <TransitionsModal
        open={open}
        handleOpen={handleOpen}
        handleClose={handleClose}
      >
        <AddForm handleClose={handleClose} />
      </TransitionsModal>
    </Container>
  );
};
