import { Button, TextField } from "@mui/material";

const CustomForm = ({ buttonColor }) => {
  return (
    <>
      <TextField
        required
        id="outlined-required"
        label="Name"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <TextField
        required
        id="outlined-required"
        label="Description"
        style={{ width: "100%", marginBottom: 10 }}
      />
      <Button
        variant="contained"
        color={buttonColor}
        style={{ marginBottom: 40, width: "100%" }}
      >
        SUBMIT
      </Button>
    </>
  );
};

export default CustomForm;
