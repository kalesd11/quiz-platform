import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <Box
      className="footer"
      display="flex"
      flexDirection="column"
      justifyContent="center"
    >
      <Box
        className="footer"
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Button color="error">
          <Instagram />
        </Button>
        <Button color="primary">
          <Facebook />
        </Button>
        <Button color="success">
          <WhatsApp />
        </Button>
        <Button color="error">
          <YouTube />
        </Button>
      </Box>
      <Typography variant="caption" textAlign="center">
        All Rights Are Reserved @Dreamers
      </Typography>
    </Box>
  );
}

export default Footer;
