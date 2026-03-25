import { useEffect, useRef } from "react";
import { Box, Typography } from "@mui/material";
import gsap from "gsap";

export default function Toast({ message, type, onClose }) {
  const toastRef = useRef(null);

  useEffect(() => {
    if (!message) return;

    // Entry animation
    gsap.fromTo(
      toastRef.current,
      { y: -50, opacity: 0, scale: 0.9 },
      { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "power3.out" }
    );

    // Auto close after 3s
    const timer = setTimeout(() => {
      gsap.to(toastRef.current, {
        y: -50,
        opacity: 0,
        duration: 0.4,
        onComplete: onClose,
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  const isSuccess = type === "success";

  return (
    <Box
      ref={toastRef}
      sx={{
        position: "fixed",
        top: 20,
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        minWidth: "280px",
        maxWidth: "90%",
        px: 3,
        py: 1.8,
        borderRadius: "12px",
        backdropFilter: "blur(15px)",
        background: isSuccess
          ? "rgba(46,125,50,0.1)"
          : "rgba(211,47,47,0.1)",
        border: `1px solid ${
          isSuccess ? "rgba(46,125,50,0.3)" : "rgba(211,47,47,0.3)"
        }`,
        boxShadow: isSuccess
          ? "0 0 20px rgba(46,125,50,0.4)"
          : "0 0 20px rgba(211,47,47,0.4)",
      }}
    >
      <Typography
        sx={{
          color: isSuccess ? "#2e7d32" : "#d32f2f",
          fontWeight: 600,
          textAlign: "center",
          textShadow: isSuccess
            ? "0 0 10px rgba(46,125,50,0.4)"
            : "0 0 10px rgba(211,47,47,0.4)",
        }}
      >
        {message}
      </Typography>
    </Box>
  );
}