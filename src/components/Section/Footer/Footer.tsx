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
        backgroundColor: "#f5f5f5", // Light gray background
        color: "#333333", // Dark gray text
        py: 3, // Reduced padding
        mt: 3,
        textAlign: "center",
        borderTop: "1px solid #e0e0e0", // Lighter border
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="body2" sx={{ fontWeight: 500 }}>
          © 2023 Durgapur Education Foundation. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;