import { Item } from "commonStyle/common.styled";
import { DeleteButton } from "components/DeleteButton/DeleteButton";
import { TransitionsModal } from "components/Modal/Modal";
import EditIcon from "@mui/icons-material/Edit";
import { EditForm } from "../EditForm/EditForm";
import { useState } from "react";
import { SwitchButton } from "components/Switch/Switch";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SpaIcon from "@mui/icons-material/Spa";
import { Text } from "commonStyle/common.styled";
export const Appointment = ({ appointment }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { confirm, guest, service, staff, timeEnd, timeStart, _id } =
    appointment;
  console.log(_id);
  return (
    <Item confirm={confirm}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>{guest}</h2>
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <AccessTimeIcon></AccessTimeIcon>
            <span>{timeStart}</span>:<span>{timeEnd}</span>
          </div>

          <Text>
            <AccountCircleIcon></AccountCircleIcon> {staff}
          </Text>
          <Text>
            <SpaIcon></SpaIcon>
            {service}
          </Text>
        </div>
        <div>
          <DeleteButton id={_id}></DeleteButton>
          <SwitchButton id={_id} confirm={confirm}></SwitchButton>
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
