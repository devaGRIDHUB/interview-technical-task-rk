import React from "react";
import { Typography, Box } from "@mui/material";

const Footer: React.FC = () => {
  return (
    <Box sx={{ textAlign: "center", padding: "20px", background: "#f5f5f5", marginTop: "20px" }}>
      <Typography variant="body2">© 2024 Rakuten. All rights reserved.</Typography>
    </Box>
  );
};

export default Footer;
