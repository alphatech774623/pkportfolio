import { Typography, Button, Box, Avatar, Stack } from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import WorkIcon from "@mui/icons-material/Work";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";

export default function Home() {
const containerRef = useRef();
const textRef = useRef();
const imgRef = useRef();
const btnRef = useRef();
const [typedText, setTypedText] = useState("");
const fullText = "Prince Maurya";
const navigate = useNavigate();
useEffect(() => {
let i = 0;
const typeWriter = () => {
if (i < fullText.length) {
setTypedText(fullText.slice(0, i + 1));
i++;
setTimeout(typeWriter, 100);
}
};
setTimeout(typeWriter, 500);

gsap.fromTo(
  containerRef.current,
  { opacity: 0, y: 40 },
  { opacity: 1, y: 0, duration: 1 }
);

gsap.fromTo(
  ".hero-item",
  { y: 80, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    stagger: 0.15,
    duration: 0.8,
    ease: "power4.out",
  }
);

}, []);

return (
<Box
sx={{
minHeight: "100vh",
display: "flex",
alignItems: "center",
justifyContent: "center",
px: { xs: 2, md: 8 },
background:
"radial-gradient(circle at 20% 20%, #1a1a2e, #0f172a, #020617)",
position: "relative",
overflow: "hidden",
color: "#fff",
}}
>
{/* GLOW BLOBS */}
<Box
sx={{
position: "absolute",
width: 400,
height: 400,
background: "#ff6a00",
filter: "blur(150px)",
top: "-100px",
left: "-100px",
opacity: 0.3,
}}
/>
<Box
sx={{
position: "absolute",
width: 400,
height: 400,
background: "#00c6ff",
filter: "blur(150px)",
bottom: "-100px",
right: "-100px",
opacity: 0.3,
}}
/>

  <Stack
    ref={containerRef}
    direction={{ xs: "column", md: "row" }}
    spacing={10}
    alignItems="center"
    sx={{
      maxWidth: "1200px",
      width: "100%",
    }}
  >
    {/* LEFT */}
    <Box sx={{ flex: 1 }}>
      <Typography
        className="hero-item"
        sx={{ color: "#aaa", mb: 1 }}
      >
        👋 Hello, I'm
      </Typography>

      <Typography
        className="hero-item"
        variant="h2"
        sx={{
          fontWeight: 800,
          mb: 2,
          fontSize: {
            xs: "2rem",
            md: "3.5rem",
          },
        }}
      >
        <span
          style={{
            background: "linear-gradient(90deg,#ff6a00,#00c6ff)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          {typedText}
        </span>
        <span style={{ opacity: 0.6 }}>|</span>
      </Typography>

      <Typography
        className="hero-item"
        sx={{
          fontSize: { xs: "1rem", md: "1.5rem" },
          color: "#ccc",
          mb: 3,
        }}
      >
        Full Stack Developer (MERN)
      </Typography>

      <Typography
        className="hero-item"
        sx={{
          color: "#aaa",
          lineHeight: 1.8,
          mb: 4,
          maxWidth: "500px",
        }}
      >
        I build modern, scalable and high-performance web applications
        with clean UI and strong backend architecture.
      </Typography>

      {/* BUTTONS */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={3}
        className="hero-item"
      >
        <Button
          startIcon={<DownloadIcon />}
           href="/princeResume.pdf"
          download
          sx={{
            px: 5,
            py: 1.5,
            borderRadius: "40px",
            fontWeight: 700,
            background:
              "linear-gradient(90deg,#ff6a00,#00c6ff)",
            color: "#fff",
            boxShadow: "0 10px 40px rgba(255,106,0,0.6)",
            "&:hover": {
              transform: "scale(1.08)",
            },
          }}
        >
          Download CV
        </Button>

        <Button
          startIcon={<WorkIcon />}
          onClick={() => navigate("/contact")}
          sx={{
            px: 5,
            py: 1.5,
            borderRadius: "40px",
            fontWeight: 700,
            color: "#fff",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "rgba(255,255,255,0.05)",
            "&:hover": {
              transform: "scale(1.08)",
              boxShadow: "0 0 30px #00c6ff",
            },
          }}
        >
          Hire Me
        </Button>
      </Stack>
    </Box>

    {/* RIGHT IMAGE */}
    <Box
      className="hero-item"
      sx={{
        position: "relative",
      }}
    >
      <Avatar
        src="/profilePic.png"
        sx={{
          width: { xs: 200, md: 300 },
          height: { xs: 200, md: 300 },
          border: "4px solid rgba(255,255,255,0.1)",
          boxShadow:
            "0 0 40px rgba(255,106,0,0.6), 0 0 100px rgba(0,198,255,0.4)",
        }}
      />

      {/* Glow ring */}
      <Box
        sx={{
          position: "absolute",
          top: -20,
          left: -20,
          width: { xs: 240, md: 340 },
          height: { xs: 240, md: 340 },
          borderRadius: "50%",
          border: "2px solid transparent",
          borderTop: "2px solid #ff6a00",
          borderRight: "2px solid #00c6ff",
          animation: "spin 4s linear infinite",
        }}
      />
    </Box>
  </Stack>
</Box>

);
}