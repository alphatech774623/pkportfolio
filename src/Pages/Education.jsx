import { Box, Typography, Stack } from "@mui/material";
import { useEffect } from "react";
import gsap from "gsap";

const educationData = [
{
title: "Diploma in Computer Science",
place: "Government Polytechnic Roorkee, Baheri Bareilly",
year: "2023 - 2026",
},
{
title: "High School & Intermediate",
place: "Deep Dev Inter College, Haldharpur Mau",
year: "Till 2023",
},
{
  title : "Advance Diploma in Computer Application",
  place : "1 year computer application course",
  year : "2023"
}
];

const certifications = [
"Wadhwani Foundation - Job Ready Skills",
"Techpile Technology Pvt. Ltd. - Industrial Training (MERN Stack)",
"Self Learning via ChatGPT & YouTube",
];

export default function Education() {
useEffect(() => {
gsap.fromTo(
".edu-card",
{ y: 80, opacity: 0 },
{
y: 0,
opacity: 1,
stagger: 0.2,
duration: 0.8,
ease: "power4.out",
}
);
}, []);

return (
<Box
sx={{
minHeight: "100vh",
px: { xs: 2, md: 8 },
py: 8,
color: "#fff",
position: "relative",
overflow: "hidden",
background:
"radial-gradient(circle at 20% 20%, #1a1a2e, #0f172a, #020617)",
}}
>
{/* GLOW BACKGROUND */}
<Box
sx={{
position: "absolute",
width: 300,
height: 300,
background: "#ff6a00",
filter: "blur(120px)",
top: "-50px",
left: "-50px",
opacity: 0.3,
}}
/>
<Box
sx={{
position: "absolute",
width: 300,
height: 300,
background: "#00c6ff",
filter: "blur(120px)",
bottom: "-50px",
right: "-50px",
opacity: 0.3,
}}
/>

  {/* HEADING */}
  <Typography
    variant="h3"
    sx={{
      textAlign: "center",
      fontWeight: 800,
      mb: 6,
      background: "linear-gradient(90deg,#ff6a00,#00c6ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    My Education
  </Typography>

  {/* TIMELINE */}
  <Box
    sx={{
      position: "relative",
      maxWidth: "900px",
      margin: "auto",
    }}
  >
    {/* LINE */}
    <Box
      sx={{
        position: "absolute",
        left: "50%",
        top: 0,
        width: "3px",
        height: "100%",
        background: "rgba(255,255,255,0.1)",
        transform: "translateX(-50%)",
      }}
    />

    {educationData.map((item, i) => (
      <Box
        key={i}
        className="edu-card"
        sx={{
          position: "relative",
          width: { xs: "100%", md: "50%" },
          ml: { md: i % 2 === 0 ? "0%" : "50%" },
          pr: { md: i % 2 === 0 ? 4 : 0 },
          pl: { md: i % 2 === 0 ? 0 : 4 },
          mb: 6,
        }}
      >
        {/* DOT */}
        <Box
          sx={{
            position: "absolute",
            top: 20,
            left: { md: i % 2 === 0 ? "100%" : "-10px" },
            transform: "translateX(-50%)",
            width: 16,
            height: 16,
            borderRadius: "50%",
            background: "#ff6a00",
            boxShadow: "0 0 15px #ff6a00",
            zIndex: 2,
          }}
        />

        {/* CARD */}
        <Box
          sx={{
            p: 3,
            borderRadius: "16px",
            backdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "0.3s",
            "&:hover": {
              transform: "translateY(-8px)",
              boxShadow: "0 20px 60px rgba(255,106,0,0.3)",
            },
          }}
        >
          <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
            {item.title}
          </Typography>

          <Typography sx={{ color: "#aaa", mt: 1 }}>
            {item.place}
          </Typography>

          <Typography sx={{ color: "#00c6ff", mt: 1 }}>
            {item.year}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>

  {/* CERTIFICATIONS */}
  <Box sx={{ mt: 10, textAlign: "center" }}>
    <Typography
      variant="h4"
      sx={{
        mb: 4,
        background: "linear-gradient(90deg,#00c6ff,#ff6a00)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Certifications & Learning
    </Typography>

    <Stack
      spacing={3}
      sx={{
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      {certifications.map((item, i) => (
        <Box
          key={i}
          className="edu-card"
          sx={{
            p: 3,
            borderRadius: "14px",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "0.3s",
            "&:hover": {
              transform: "scale(1.03)",
              boxShadow: "0 15px 40px rgba(0,198,255,0.3)",
            },
          }}
        >
          <Typography>{item}</Typography>
        </Box>
      ))}
    </Stack>
  </Box>
</Box>

);
}