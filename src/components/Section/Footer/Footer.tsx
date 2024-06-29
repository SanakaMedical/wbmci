import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { motion } from "framer-motion";

const Footer: React.FC = () => {
  return (
    <Box
      component={motion.footer}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      sx={{
        backgroundColor: "#1A1A1A",
        color: "#FFFFFF",
        py: { xs: 4, md: 6 },
        mt: 3,
        textAlign: "center",
        borderTop: "1px solid #333",
        paddingTop: "20px",
        borderRadius: "12px 12px 0 0", // Rounded corners at the top
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h5" gutterBottom sx={{ color: "#FF9800", fontWeight: "bold" }}>
          This is a Product of Durgapur Education Foundation
        </Typography>
        <Typography variant="body1" sx={{ color: "#CCCCCC", lineHeight: 1.8 }}>
          &copy; 2023 All rights reserved. Design & Developed by DEF.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
