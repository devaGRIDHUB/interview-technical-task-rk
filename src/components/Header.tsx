import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const Header: React.FC = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#333", padding: "10px 0" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        <Typography variant="h6">Rakuten Product Store</Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
