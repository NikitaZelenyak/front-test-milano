import { Item } from "commonStyle/common.styled";
export const Staff = ({ staff }) => {
  const { firstName, lastName, jobTitle } = staff;
  return (
    <Item>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{jobTitle}</p>
    </Item>
  );
};
