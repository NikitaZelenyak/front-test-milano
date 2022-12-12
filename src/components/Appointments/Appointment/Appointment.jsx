import { Item } from "commonStyle/common.styled";
import { DeleteButton } from "components/DeleteButton/DeleteButton";
import { TransitionsModal } from "components/Modal/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { EditForm } from "../EditForm/EditForm";
import { useState } from "react";
export const Appointment = ({ appointment }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { confirm, date, guest, service, staff, timeEnd, timeStart, _id } =
    appointment;
  console.log(_id);
  return (
    <Item>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>{guest}</h2>
          <span>{timeStart}</span> : <span>{timeEnd}</span>
          <p>{staff}</p>
          <p>{service}</p>
        </div>
        <div>
          <DeleteButton id={_id}></DeleteButton>
          <TransitionsModal
            handleOpen={handleOpen}
            handleClose={handleClose}
            open={open}
            img={<EditIcon />}
          >
            <EditForm id={_id} handleClose={handleClose}></EditForm>
          </TransitionsModal>
        </div>
      </div>
    </Item>
  );
};
