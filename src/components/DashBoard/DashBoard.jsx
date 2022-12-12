import { Appointments } from "components/Appointments/Appointments";
import { Services } from "components/Services/Services";
import { Guests } from "components/Guests/Guests";
import { Staffs } from "components/Staffs/Staffs";

import { Container } from "./DashBoard.styled";

export const DashBoard = () => {
  return (
    <Container>
      <Guests></Guests>
      <Staffs></Staffs>
      <Services></Services>
      <Appointments></Appointments>
    </Container>
  );
};
