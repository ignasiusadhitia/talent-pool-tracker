import { Button, Grid, Typography } from "@mui/material";
import CustomCard from "./CustomCard";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const CustomGrid = ({ gridTitle, buttonColor, buttonText, formField }) => {
  return (
    <Grid item xs={12} sm={6} md={3} style={{ marginBottom: 50 }}>
      <Typography variant="h6" style={{ textAlign: "center", fontWeight: 700 }}>
        {gridTitle}
      </Typography>
      <Button
        variant="contained"
        size="large"
        style={{ marginTop: 20, marginBottom: 20, width: "100%" }}
        color={buttonColor}
      >
        <ControlPointIcon style={{ marginRight: 10 }} />
        {buttonText}
      </Button>
      {formField}
      <CustomCard />
    </Grid>
  );
};

export default CustomGrid;
