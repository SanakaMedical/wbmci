import React, { useState, useCallback, useEffect } from "react";
import TabWithPopup from "../PopupForm/PopupForm";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
  Typography,
} from "@mui/material";

export interface FormData {
  name: string;
  email: string;
  phoneNumber: string;
}

const CarouselComponent: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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

  const handleButtonClick = (link: string) => {
    if (formFilled) {
      window.location.href = link;
    } else {
      handleOpen();
    }
  };

  interface CardData {
    link: string;
    logo: string;
  }
  const demoData: CardData[] = [
    { link: "https://sanakamedical.com/", logo: "../ExImages/sanaka.png" },
    { link: "https://www.jimsh.org/", logo: "../ExImages/jims.jpg" },
    { link: "https://gimsh.in/", logo: "../ExImages/Gouridevi.png" },
    { link: "https://iqcity.in/", logo: "../ExImages/IQ-City.png" },
    { link: "https://icaremedicalcollege.in/", logo: "../ExImages/icare.png" },
    {
      link: "https://www.smcbangla.com/",
      logo: "../ExImages/santiniketan.png",
    },
    { link: "https://jmnmedicalcollege.org.in/", logo: "../ExImages/JMN.png" },
    { link: "https://www.kpcmedicalcollege.in/", logo: "../ExImages/KPC.png" },
    { link: "https://eastwestmedical.in/", logo: "../ExImages/BlackLogo-CpuD5bhO.png" },

  ];

  return (
    <>
      <Box
        onClick={handleOpen}
        sx={{
          width: "100%",
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          pt: "10px",
          backgroundColor: "#f5f5f5", // Background color for the carousel
          padding: "20px 0", // Padding for top and bottom
        }}
      >
        <Grid container spacing={isMobile ? 2 : 3}>
          {demoData.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
              <Card
                sx={{
                  height: "60vh",
                  width: "auto",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.2)", // Darkened shadow
                  transition: "transform 0.3s ease",
                  borderRadius: "8px",
                  overflow: "hidden",
                  "&:hover": {
                    transform: "scale(1.03)",
                    boxShadow: "0 8px 16px rgba(0,0,0,0.4)", // Darkened shadow on hover
                  },
                  backgroundColor: "#fff", // Background color for card
                }}
              >
                <CardActionArea
                  sx={{
                    flexGrow: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: "1rem",
                  }}
                  onClick={() => handleButtonClick(card.link)} // Move the onClick handler here to ensure it works correctly
                >
                  <CardContent
                    sx={{
                      flexGrow: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      component="img"
                      src={card.logo}
                      alt="Logo"
                      sx={{
                        width: "100%",
                        height: "auto",
                        objectFit: "contain",
                        marginBottom: "1rem",
                      }}
                    />
                    <Typography
                      sx={{
                        color: "#FFFFFF",
                        backgroundColor: "#0035b3",
                        borderRadius: "20px",
                        padding: "12px 12px",
                        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
                        transition: "background-color 0.3s ease",
                        cursor: "pointer", // Make cursor a pointer to indicate clickable
                        "&:hover": {
                          backgroundColor: "#002080", // Darker shade on hover
                        },
                      }}
                    >
                      View More
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
      <TabWithPopup
        isOpen={isOpen}
        onSubmit={handleSubmit}
        formFilled={formFilled}
        onFormChange={handleFormChange}
      />
    </>
  );
};

export default CarouselComponent;
