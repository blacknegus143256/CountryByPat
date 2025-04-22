import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box component="footer" textAlign="center" py={3} mt={4} bgcolor="#f1f1f1">
    <Typography variant="body2" color="textSecondary">
      &copy; {new Date().getFullYear()} Visualizing Country Information by Patrick Corda
    </Typography>
  </Box>
);

export default Footer;
