import { Container } from "Container/Container";
import { Guest } from "./Guest/Guest";
import { TransitionsModal } from "components/Modal/Modal";
import { useGetGuestsQuery } from "redux/Guests/Guests";
import { AddForm } from "./Form/AddForm";
import { useState } from "react";
export const Guests = () => {
  const { data } = useGetGuestsQuery();
  const guests = data?.data?.result;
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Container list="Guest">
        {guests &&
          guests.map((guest) => <Guest key={guest._id} guest={guest}></Guest>)}
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
