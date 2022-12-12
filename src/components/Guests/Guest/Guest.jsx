import { Item } from "commonStyle/common.styled";
export const Guest = ({ guest }) => {
  const { email, firstName, lastName, phone } = guest;
  return (
    <Item>
      <h2>
        {firstName} {lastName}
      </h2>
      <p>{phone}</p>
      <p>{email}</p>
    </Item>
  );
};
