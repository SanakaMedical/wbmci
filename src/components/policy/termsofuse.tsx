import React from "react";
import { Typography, Container } from "@mui/material";

const TermsOfUse: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
        Terms of Use
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to the Durgapur Education Foundation website. By using our services, you agree to the
        following terms and conditions. Please read them carefully before using the site.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        1. Acceptance of Terms
      </Typography>
      <Typography variant="body1" paragraph>
        By accessing or using our website, you acknowledge that you have read, understood, and agree
        to be bound by these Terms of Use.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        2. Use of Content
      </Typography>
      <Typography variant="body1" paragraph>
        All content provided on this site, including text, graphics, images, and other material, is
        the property of Durgapur Education Foundation. You may not reproduce, distribute, or create
        derivative works from this content without our prior written consent.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        3. User Conduct
      </Typography>
      <Typography variant="body1" paragraph>
        You agree not to use our services for any unlawful or prohibited activities. This includes,
        but is not limited to, transmitting harmful code, engaging in fraudulent activities, or
        attempting to disrupt our services.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        4. Limitation of Liability
      </Typography>
      <Typography variant="body1" paragraph>
        We strive to provide accurate and up-to-date information on our website. However, we do not
        guarantee that the content is free from errors. We are not liable for any direct or indirect
        damages arising from your use of our site.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        5. Changes to Terms
      </Typography>
      <Typography variant="body1" paragraph>
        We reserve the right to modify these Terms of Use at any time. Your continued use of the site
        after any changes constitutes your acceptance of the new terms.
      </Typography>
    </Container>
  );
};

export default TermsOfUse;
