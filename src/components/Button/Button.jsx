import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
export const AddButton = () => {
  return (
    <Button
      sx={{
        display: "block",
        position: "absolute",
        bottom: "20px",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <AddIcon style={{ color: "orange" }} />
    </Button>
  );
};
