import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Borders = ({ borders = [] }) => {
  if (!borders.length) return <Typography>No bordering countries</Typography>;

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
            {code}
          </Button>
        ))}
      </Stack>
    </Box>
  );
};

export default Borders;
