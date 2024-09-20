import React, { useState } from "react";
import { Typography, Box, Container, TextField, Button, Grid } from "@mui/material";

const ContactNow: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., sending the data to an API or displaying a success message
    alert("Thank you for contacting us!");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 5 }}>
      <Typography variant="h4" sx={{ fontWeight: 600, mb: 3 }}>
        Contact Us
      </Typography>
      <Typography variant="body1" paragraph>
        We'd love to hear from you! Whether you have a question, suggestion, or need assistance, feel free to contact us using the form below.
      </Typography>

      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              variant="outlined"
              type="email"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              required
              label="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              multiline
              rows={4}
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 2, px: 4 }}
            >
              Send Message
            </Button>
          </Grid>
        </Grid>
      </Box>

      <Box mt={5}>
        <Typography variant="h6" sx={{ fontWeight: 600 }}>
          Contact Details
        </Typography>
        <Typography variant="body2">Email: Durgapureducationfoundation.23@gmail.com</Typography>
        <Typography variant="body2">Phone: +91 90462 28190</Typography>
        <Typography variant="body2">Address: kamdhenu Building, Durgapur,city centre, West Bengal, India</Typography>
      </Box>
    </Container>
  );
};

export default ContactNow;
