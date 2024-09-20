import React from "react";
import { Typography, Container } from "@mui/material";

const PrivacyPolicy: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
        Privacy Policy
      </Typography>
      <Typography variant="body1" paragraph>
        At Durgapur Education Foundation, we value your privacy and are committed to protecting your
        personal information. This Privacy Policy outlines how we collect, use, and safeguard your
        data when you use our services.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        Information We Collect
      </Typography>
      <Typography variant="body1" paragraph>
        We collect personal information that you provide to us, such as your name, email address, and
        any other details you submit when signing up for our services. Additionally, we may collect
        non-personal information such as your browser type, device type, and browsing behavior.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        How We Use Your Information
      </Typography>
      <Typography variant="body1" paragraph>
        We use the information collected to enhance your user experience, provide educational
        resources, respond to your inquiries, and improve our services. We do not share your personal
        information with third parties unless required by law.
      </Typography>

      <Typography variant="h6" sx={{ mt: 3, mb: 1 }}>
        Data Security
      </Typography>
      <Typography variant="body1" paragraph>
        We use appropriate security measures to protect your personal data from unauthorized access or
        disclosure. However, please note that no method of transmission over the internet or
        electronic storage is 100% secure.
      </Typography>

      <Typography variant="body1" paragraph>
        By using our services, you consent to the collection and use of your information in accordance
        with this policy.
      </Typography>
    </Container>
  );
};

export default PrivacyPolicy;
