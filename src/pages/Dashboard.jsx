import * as React from "react";
import Box from "@mui/material/Box";
import { Container, Grid } from "@mui/material";
import CustomGrid from "../components/CustomGrid";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrackerForm from "../components/TrackerForm";
import CustomForm from "../components/CustomForm";

const Dashboard = () => {
  return (
    <Container>
      <Box sx={{ flexGrow: 1 }} style={{ marginTop: 100, marginBottom: 50 }}>
        <Grid container spacing={2}>
          <CustomGrid
            gridTitle="Talents"
            buttonColor="secondary"
            buttonText="ADD TALENT"
            formField={<CustomForm buttonColor="secondary" />}
          />
          <CustomGrid
            gridTitle="Companies"
            buttonColor="success"
            buttonText="ADD COMPANY"
            formField={<CustomForm buttonColor="success" />}
          />
          <CustomGrid
            gridTitle="Talent Officers"
            buttonColor="warning"
            buttonText="ADD OFFICER"
            formField={<CustomForm buttonColor="warning" />}
          />
          <CustomGrid
            gridIcon={<TrendingUpIcon />}
            gridTitle="Tracker"
            buttonColor="error"
            buttonText="ADD TRACKER"
            formField={<TrackerForm buttonColor="error" />}
          />
        </Grid>
      </Box>
    </Container>
  );
};

export default Dashboard;
