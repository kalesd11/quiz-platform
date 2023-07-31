import React from "react";
import Typography from "@mui/material/Typography";
import { Box, Button } from "@mui/material";
import { Facebook, Instagram, WhatsApp, YouTube } from "@mui/icons-material";
import { Link } from "react-router-dom";

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
        <Button color="error" LinkComponent={Link} target="_blank" to="https://instagram.com/kalesd?igshid=MzNlNGNkZWQ4Mg==">
          <Instagram />
        </Button>
        <Button color="primary" LinkComponent={Link} target="_blank">
          <Facebook />
        </Button>
        <Button color="success" LinkComponent={Link} target="_blank" to="https://chat.whatsapp.com/L4MzY1CI5RaB7UequcgOtu">
          <WhatsApp />
        </Button>
        <Button color="error" LinkComponent={Link} to="https://youtube.com/@kalesd11" target="_blank">
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
