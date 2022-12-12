import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
export const SubmitButton = ({ disabled }) => {
  return (
    <Stack direction="row" spacing={2}>
      <Button
        disabled={disabled ? false : true}
        type="Submit"
        sx={{
          marginLeft: "auto",
          marginRight: "auto",
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Add
      </Button>
    </Stack>
  );
};
