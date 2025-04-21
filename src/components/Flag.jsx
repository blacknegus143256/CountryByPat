import React from "react";
import { Box } from "@mui/material";

const Flag = ({ flagUrl }) => (
  <Box
    component="img"
    src={flagUrl}
    alt="Country flag"
    sx={{
      width: "100%",
      maxHeight: "200px",
      objectFit: "contain",
      borderRadius: "8px",
      marginBottom: 2
    }}
  />
);

export default Flag;
