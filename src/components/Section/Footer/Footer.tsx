import React from "react";
import { Typography, Box, Container, Grid, Link } from "@mui/material";
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
        py: 4, // Increased padding for better spacing
        mt: 3,
        textAlign: "center",
        borderTop: "1px solid #e0e0e0", // Lighter border
      }}
    >
      <Container maxWidth="lg">
        {/* Company Information */}
        <Grid container spacing={4}>
          {/* About Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              About Us
            </Typography>
            <Typography variant="body2">
              Durgapur Education Foundation is committed to providing quality
              education resources and support for students worldwide.
            </Typography>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email: Durgapureducationfoundation.23@gmail.com
            </Typography>
            <Typography variant="body2">Phone: +91 90462 28190</Typography>
            <Typography variant="body2">
              Address: kamdhenu Building, Durgapur,city centre, West Bengal,
              India
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 2 }}>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <Link
                href="/about"
                sx={{ textDecoration: "none", color: "#333333" }}
              >
                About Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link
                href="/contact"
                sx={{ textDecoration: "none", color: "#333333" }}
              >
                Contact Us
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link
                href="/privacy"
                sx={{ textDecoration: "none", color: "#333333" }}
              >
                Privacy Policy
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link
                href="/terms"
                sx={{ textDecoration: "none", color: "#333333" }}
              >
                Terms of Service
              </Link>
            </Typography>
          </Grid>
        </Grid>

        {/* Footer Bottom Section */}
        <Box mt={4}>
          <Typography variant="body2" sx={{ fontWeight: 500 }}>
            © 2023 Durgapur Education Foundation. All rights reserved.
          </Typography>
          <Typography variant="body2" sx={{ fontSize: "0.875rem" }}>
            Made with ❤️ in Durgapur, India.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
