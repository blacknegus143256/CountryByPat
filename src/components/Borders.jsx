import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Borders = ({ borders = [], countries = [] }) => {
  if (!borders.length) return <Typography>No bordering countries</Typography>;

  // Create a lookup to find country name by code
  const getCountryName = (code) => {
    const match = countries.find((c) => c.cca3 === code);
    return match ? match.name.common : code;
  };

  return (
    <Box>
      <Typography variant="h6" gutterBottom>Borders:</Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {borders.map((code) => (
          <Button
            key={code}
            component={Link}
            to={`/country/${code}`}
            variant="outlined"
            size="small"
          >
            {getCountryName(code)}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Borders;
