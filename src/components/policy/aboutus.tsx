import React from "react";
import { Typography,Container } from "@mui/material";

const AboutU: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
        About Us
      </Typography>
      <Typography variant="body1" paragraph>
        Welcome to Durgapur Education Foundation! We are a non-profit organization committed to
        improving education accessibility and providing top-notch learning resources to students
        across the globe.
      </Typography>
      <Typography variant="body1" paragraph>
        Our mission is to empower learners by offering modern and effective educational resources that
        cater to various learning needs. We work closely with educators, institutions, and students
        to create programs that make a real difference in people’s lives.
      </Typography>
      <Typography variant="body1" paragraph>
        At Durgapur Education Foundation, we believe that education is the foundation of a brighter future, 
        and we are dedicated to making high-quality education available to all.
      </Typography>
    </Container>
  );
};

export default AboutU;
