import * as React from "react";
import { Paper, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
      elevation={3}
      style={{ padding: 10, textAlign: "center" }}
    >
      <Typography variant="subtitle2" color="text.secondary">
        &#169; 2021 Talent Pool Tracker
      </Typography>
    </Paper>
  );
};

export default Footer;
