import { Item } from "commonStyle/common.styled";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import { Text } from "commonStyle/common.styled";
export const Guest = ({ guest }) => {
  const { email, firstName, lastName, phone } = guest;
  return (
    <Item>
      <h2>
        {firstName} {lastName}
      </h2>
      <Text>
        <LocalPhoneIcon fontSize="small"></LocalPhoneIcon>
        {phone}
      </Text>
      <Text>
        <EmailIcon fontSize="small"></EmailIcon>
        {email}
      </Text>
    </Item>
  );
};
