import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  useMediaQuery,
  useTheme,
  Button,
} from "@mui/material";

interface CardData {

  link: string;
  logo: string; // Add logo property to CardData interface
}

const demoData: CardData[] = [
  { link: "https://example.com/1", logo: "../ExImages/sanaka.png" },
  { link: "https://example.com/2", logo: "/path/to/card2_logo.png" },
  { link: "https://example.com/3", logo: "/path/to/card3_logo.png" },
  { link: "https://example.com/1", logo: "../ExImages/sanaka.png" },
  { link: "https://example.com/2", logo: "/path/to/card2_logo.png" },
  { link: "https://example.com/3", logo: "/path/to/card3_logo.png" },
  { link: "https://example.com/1", logo: "../ExImages/sanaka.png" },
  { link: "https://example.com/1", logo: "../ExImages/sanaka.png" },
  // Add more cards with different logo URLs
];

const ResponsiveCardGrid: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid container spacing={isMobile ? 2 : 3}>
      {demoData.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
          <Card
            sx={{
              height: "30vh",
              // width: "50vh",
              
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
              transition: "transform 0.3s ease",
              borderRadius: "8px",
              overflow: "hidden", // Ensure content inside card doesn't overflow
              backgroundImage: `url(${card.logo})`, // Dynamic background image URL
              backgroundSize: "cover", // Ensure the background image covers the entire card
              backgroundPosition: "center", // Center the background image
              "&:hover": {
                transform: "scale(1.03)",
                boxShadow: "0 8px 16px rgba(0,0,0,0.2)",
              },
            }}
          >
            <CardActionArea
              onClick={() => (window.location.href = card.link)}
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                padding: "1rem",
              }}
            >
              <CardContent
                sx={{
                  flexGrow: 1,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Button variant="outlined" sx={{ alignSelf: "center" }}>
                  View More
                </Button>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default ResponsiveCardGrid;
