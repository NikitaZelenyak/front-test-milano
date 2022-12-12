import { Container } from "Container/Container";
import { Staff } from "./Staff/Staff";
import { useGetStaffsQuery } from "redux/Staffs/Staffs";
import { TransitionsModal } from "components/Modal/Modal";
import { AddForm } from "./Form/addForm";
import { useState } from "react";
export const Staffs = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { data } = useGetStaffsQuery();
  const staffs = data?.data?.result;
  return (
    <Container list="Staffs">
      {staffs &&
        staffs.map((staff) => <Staff key={staff._id} staff={staff}></Staff>)}
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
