import * as React from "react";
import { TextField, MenuItem, Button } from "@mui/material";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const TrackerForm = ({ buttonColor }) => {
  const [currency, setCurrency] = React.useState("EUR");

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return (
    <>
      <TextField
        id="outlined-select-talent"
        select
        label="Select"
        value={currency}
        style={{ width: "100%", marginBottom: 15 }}
        onChange={handleChange}
        helperText="Please select talent"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-company"
        select
        label="Select"
        value={currency}
        style={{ width: "100%", marginBottom: 15 }}
        onChange={handleChange}
        helperText="Please select company"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-officer"
        select
        label="Select"
        value={currency}
        style={{ width: "100%", marginBottom: 15 }}
        onChange={handleChange}
        helperText="Please select officer"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        id="outlined-select-status"
        select
        label="Select"
        value={currency}
        style={{ width: "100%", marginBottom: 15 }}
        onChange={handleChange}
        helperText="Please select status"
      >
        {currencies.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
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

export default TrackerForm;
