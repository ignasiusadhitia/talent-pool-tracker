import * as React from "react";
import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";

const Headbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <TrackChangesIcon fontSize="large" />
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
            style={{ fontWeight: 700, margin: 10 }}
          >
            Talent Pool Tracker
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Headbar;
