import React, { useState, useCallback, useEffect } from "react";
import {
  Box,
  IconButton,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TabWithPopup from "../../PopupForm/PopupForm";
import { FormData } from "../../Home/Home";
import { motion } from "framer-motion";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  useEffect(() => {
    const storedFormFilled = localStorage.getItem("formFilled");
    if (storedFormFilled === "true") {
      setFormFilled(true);
    }
  }, []);

  const handleOpen = useCallback(() => {
    if (!formFilled) {
      setIsOpen(true);
    }
  }, [formFilled]);

  const handleSubmit = (formData: FormData) => {
    const hasContent =
      formData.name.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.phoneNumber.trim() !== "";

    if (hasContent) {
      setFormFilled(true);
      localStorage.setItem("formFilled", "true");
      setIsOpen(false);
    } else {
      alert("Form is not filled out completely. Please fill it out.");
    }
  };

  const handleFormChange = useCallback(
    (data: { name: string; email: string }) => {
      setFormFilled(data.name !== "" && data.email !== "");
    },
    []
  );

  const handleLinkClick = (link: string) => {
    const storedFormFilled = localStorage.getItem("formFilled");
    if (storedFormFilled === "true") {
      window.location.href = link;
    } else {
      handleOpen();
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        p: { xs: 1, sm: 2 },
        maxWidth: "auto", // Ensure the header takes full width
        margin: "0 auto",
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[4],
        borderRadius: theme.shape.borderRadius,
      }}
    >
      <Box sx={{ flexShrink: 0 }}>
        <img
          src="../images/Loader.png"
          alt="Logo"
          style={{
            height: isMobile ? 60 : isTablet ? 80 : 100,
          }}
        />
      </Box>
      <Typography
        variant="h5"
        component="div"
        sx={{
          textAlign: "center",
          flexGrow: 1,
          fontWeight: "bold",
          color: theme.palette.text.primary,
          cursor: "pointer", // Adding cursor style to indicate clickable text
        }}
        onClick={() => handleLinkClick("/")} // Making the text clickable
      >
        WEST BENGAL MEDICAL COLLEGE INFORMATION (W.B.M.C.I)
      </Typography>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        style={{
          position: "fixed",
          bottom: isMobile ? 20 : 40,
          right: isMobile ? 20 : 40,
          zIndex: 20,
        }}
      >
        <Stack direction="column" spacing={1} alignItems="center">
          <IconButton
            href="https://wa.me/918420461369"
            target="_blank"
            sx={{
              backgroundColor: "#25D366",
              color: "white",
              borderRadius: "50%",
              width: isMobile ? 48 : 64,
              height: isMobile ? 48 : 64,
            }}
          >
            <WhatsAppIcon sx={{ fontSize: isMobile ? 28 : 40 }} />
          </IconButton>
          <Button
            variant="outlined"
            startIcon={<PhoneIcon />}
            href="tel:+918017508002"
            size="small"
            sx={{
              color: "white",
              backgroundColor: "#28a745",
              "&:hover": { backgroundColor: "#218838" },
            }}
          >
            IVR 1
          </Button>
          <Button
            variant="outlined"
            startIcon={<PhoneIcon />}
            href="tel:+917477798949"
            size="small"
            sx={{
              color: "white",
              backgroundColor: "#28a745",
              "&:hover": { backgroundColor: "#218838" },
            }}
          >
            IVR 2
          </Button>
        </Stack>
      </motion.div>
      <TabWithPopup
        isOpen={isOpen}
        onSubmit={handleSubmit}
        formFilled={formFilled}
        onFormChange={handleFormChange}
      />
    </Box>
  );
};

export default Header;
