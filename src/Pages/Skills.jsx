import { useEffect, useState } from "react";
import { Box, Typography, Stack, Button } from "@mui/material";
import {
FaReact,
FaNodeJs,
FaHtml5,
FaCss3Alt,
FaJs,
FaGitAlt,
FaWordpress,
} from "react-icons/fa";
import { SiMongodb, SiExpress, SiBootstrap } from "react-icons/si";
import gsap from "gsap";

const categories = {
frontend: [
{ name: "React", icon: <FaReact />, color: "#61DBFB" },
{ name: "JavaScript", icon: <FaJs />, color: "#f7df1e" },
{ name: "HTML", icon: <FaHtml5 />, color: "#e34c26" },
{ name: "CSS", icon: <FaCss3Alt />, color: "#264de4" },
{ name: "Bootstrap", icon: <SiBootstrap />, color: "#7952B3" },
],
backend: [
{ name: "Node.js", icon: <FaNodeJs />, color: "#68A063" },
{ name: "Express", icon: <SiExpress />, color: "#ffffff" },
{ name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
],
tools: [{ name: "Git", icon: <FaGitAlt />, color: "#f1502f" }],
frameworks: [
{ name: "WordPress", icon: <FaWordpress />, color: "#21759B" },
],
};

export default function Skills() {
const [active, setActive] = useState("frontend");

useEffect(() => {
gsap.fromTo(
".skill-card",
{ y: 80, opacity: 0, scale: 0.8 },
{
y: 0,
opacity: 1,
scale: 1,
stagger: 0.1,
duration: 0.8,
ease: "power4.out",
}
);
}, [active]);

return (
<Box
sx={{
minHeight: "100vh",
px: { xs: 2, md: 8 },
py: 6,
color: "#fff",
background:
"radial-gradient(circle at 20% 20%, #1a1a2e, #0f172a, #020617)",
position: "relative",
overflow: "hidden",
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
      mb: 1,
      background: "linear-gradient(90deg,#ff6a00,#00c6ff)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
    }}
  >
    My Skills
  </Typography>

  <Typography
    sx={{
      textAlign: "center",
      color: "#aaa",
      mb: 4,
    }}
  >
    I build modern, scalable & high-performance web applications
  </Typography>

  {/* CATEGORY BUTTONS */}
  <Stack
    direction="row"
    spacing={2}
    justifyContent="center"
    flexWrap="wrap"
    sx={{ mb: 5 }}
  >
    {Object.keys(categories).map((key) => (
      <Button
        key={key}
        onClick={() => setActive(key)}
        sx={{
          px: 3,
          py: 1,
          borderRadius: "30px",
          textTransform: "capitalize",
          backdropFilter: "blur(10px)",
          background:
            active === key
              ? "linear-gradient(90deg,#ff6a00,#00c6ff)"
              : "rgba(255,255,255,0.05)",
          color: "#fff",
          border: "1px solid rgba(255,255,255,0.1)",
          transition: "0.3s",
          "&:hover": {
            background: "linear-gradient(90deg,#ff6a00,#00c6ff)",
          },
        }}
      >
        {key}
      </Button>
    ))}
  </Stack>

  {/* SKILLS GRID */}
  <Box
    sx={{
      display: "grid",
      gridTemplateColumns: {
        xs: "1fr",
        sm: "1fr 1fr",
        md: "1fr 1fr 1fr",
        lg: "1fr 1fr 1fr 1fr",
      },
      gap: 4,
    }}
  >
    {categories[active].map((skill, i) => (
      <Box
        key={i}
        className="skill-card"
        sx={{
          p: 4,
          borderRadius: "20px",
          textAlign: "center",
          backdropFilter: "blur(20px)",
          background: "rgba(255,255,255,0.05)",
          border: "1px solid rgba(255,255,255,0.1)",
          transition: "0.4s",
          position: "relative",
          overflow: "hidden",

          "&:hover": {
            transform: "translateY(-10px) scale(1.03)",
            boxShadow: `0 20px 60px ${skill.color}55`,
          },

          "&::before": {
            content: '""',
            position: "absolute",
            inset: 0,
            background: `linear-gradient(120deg, transparent, ${skill.color}33, transparent)`,
            opacity: 0,
            transition: "0.4s",
          },

          "&:hover::before": {
            opacity: 1,
          },
        }}
      >
        {/* ICON */}
        <Box
          sx={{
            fontSize: "3rem",
            color: skill.color,
            mb: 2,
            textShadow: `0 0 20px ${skill.color}`,
          }}
        >
          {skill.icon}
        </Box>

        {/* NAME */}
        <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
          {skill.name}
        </Typography>

        {/* SUBTEXT */}
        <Typography sx={{ fontSize: "0.85rem", color: "#aaa", mt: 1 }}>
          Professional experience building projects
        </Typography>
      </Box>
    ))}
  </Box>
</Box>

);
}
