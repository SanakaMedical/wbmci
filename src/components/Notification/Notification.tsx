import React, { useState, useCallback, useEffect, useRef } from "react";
import { Box, Typography, Link } from "@mui/material";
import { keyframes } from "@emotion/react";
import TabWithPopup from "../PopupForm/PopupForm";
import { FormData } from "../Home/Home";
import ConfirmationPopup from "./ConfirmationPopup";

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-100%); }
`;

interface NotificationItem {
  message: string;
  link?: string;
  ConfirmationMessage?: string;
}

interface NotificationBarProps {
  duration?: number;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ duration = 40 }) => {
  const notificationRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [formFilled, setFormFilled] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedNotification, setSelectedNotification] = useState<NotificationItem | null>(null);
  const [forceUpdate, setForceUpdate] = useState(false);

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
      setShowConfirmation(true);
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

  const handleLinkClick = (notification: NotificationItem) => {
    const storedFormFilled = localStorage.getItem("formFilled");
    if (storedFormFilled === "true") {
      window.location.href = notification.link!;
    } else {
      setSelectedNotification(notification);
      handleOpen();
    }
  };

  const demoItems: NotificationItem[] = [
    {
      message: "NEET UG Counselling 2024 Starts From July 6",
      link: "/",
      ConfirmationMessage:
        "Your information has been shared with our College Representative. They will call you back soon. You can also reach them at the following numbers : 7477798949",
    },
    {
      message: "NTA re-exam result at exams.nta.ac.in/NEET/",
      link: "https://exams.nta.ac.in/NEET/",
      ConfirmationMessage:
        "Your information has been shared with our College Representative. They will call you back soon. You can also reach them at the following numbers : 7477798950",
    },
    {
      message: "Counselling notification and schedule awaited on mcc.nic.in",
      link: "https://mcc.nic.in/",
      ConfirmationMessage:
        "Your information has been shared with our College Representative. They will call you back soon. You can also reach them at the following numbers : 7063592396",
    },
  ];

  useEffect(() => {
    const element = notificationRef.current;
    if (!element) return;

    const contentWidth = element.scrollWidth;
    const containerWidth = element.offsetWidth;
    const animationDuration = (contentWidth / containerWidth) * duration;
    element.style.animationDuration = `${animationDuration}s`;
  }, [duration, forceUpdate]);

  useEffect(() => {
    const handleResize = () => {
      setForceUpdate(prev => !prev);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#0035b3",
        color: "white",
        padding: "10px",
        borderRadius: "5px",
        marginBottom: "10px",
        overflow: "hidden",
        position: "relative",
        zIndex: 1000,
        width: "auto",
      }}
    >
      <Box
        ref={notificationRef}
        sx={{
          display: "flex",
          alignItems: "center",
          animation: `${scroll} linear infinite`,
          color: "white",
          whiteSpace: "nowrap",
          position: "relative",
          zIndex: 1000,
          width: "fit-content",
        }}
      >
        {[...demoItems, ...demoItems].map((item, index) => (
          <Link
            key={index}
            onClick={() => handleLinkClick(item)}
            sx={{
              color: "inherit",
              textDecoration: "none",
              marginRight: "100px",
              display: "inline-flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginRight: "8px",
                animation: "blink 1s infinite",
                padding: "8px",
                borderRadius: "4px",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
                "@keyframes blink": {
                  "0%": { opacity: 1 },
                  "50%": { opacity: 0.5 },
                  "100%": { opacity: 1 },
                },
              }}
            >
              <Typography
                variant="body1"
                sx={{ color: "red", fontWeight: 800 }}
              >
                New
              </Typography>
            </Box>

            <Typography variant="body1" component="span">
              {item.message}
            </Typography>
          </Link>
        ))}
      </Box>
      <TabWithPopup
        isOpen={isOpen}
        onSubmit={handleSubmit}
        formFilled={formFilled}
        onFormChange={handleFormChange}
      />
      {selectedNotification && (
        <ConfirmationPopup
          isOpen={showConfirmation}
          onClose={() => setShowConfirmation(false)}
          message={selectedNotification.ConfirmationMessage}
        />
      )}
    </Box>
  );
};

export default NotificationBar;