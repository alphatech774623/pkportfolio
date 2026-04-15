import { useEffect, useRef, useState } from "react";
import { Box, Typography, Stack, Button, Chip } from "@mui/material";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import gsap from "gsap";
import Toast from "../Components/Toast";
import { useNavigate } from "react-router-dom";

const projects = [
{
title: "Fixkar Smart Services",
desc: "A modern service marketplace connecting users with professionals.",
tech: ["React", "Node.js", "MongoDB", "Google Cloud"],
image: "/fixkar.png",
liveLink: "https://fixkarr.com",
codeLink: "",
showCode: false,
showLive: true,
},
{
title: "Blog Website",
desc: "SEO optimized blog platform built on CMS.",
tech: ["WordPress", "SEO", "CMS"],
image: "/alphatechdev.png",
liveLink: "https://alphatechdev.com",
codeLink: "",
showCode: false,
showLive: true,
},
{
title: "OnnDmnd Platform",
desc: "Landing page with lead capture system.",
tech: ["React", "Google Sheet", "Bootstrap"],
image: "/onndmnd.png",
liveLink: "https://onndmnd.com",
codeLink: "https://github.com/alphatech774623/OnnDmnd",
showCode: true,
showLive: true,
},
{
title: "Portfolio Website",
desc: "My personal modern portfolio.",
tech: ["React", "GSAP", "Bootstrap"],
image: "/portfolio.png",
liveLink: "https://princemauryainfo.netlify.app",
codeLink: "https://github.com/alphatech774623/pkportfolio",
showCode: true,
showLive: true,
},
{
title: "Real Estate Platform",
desc: "Apartment booking web application.",
tech: ["MERN", "Cloudinary"],
image: "/apnaghar.png",
liveLink: "https://apna-ghar-six.vercel.app",
codeLink: "https://github.com/alphatech774623/Apna-Ghar",
showCode: true,
showLive: true,
},
];

export default function Projects() {
const navigate = useNavigate();
const sectionRef = useRef(null);

const [toast, setToast] = useState({
show: false,
message: "",
type: "",
});

useEffect(() => {
gsap.fromTo(
".project-card",
{ y: 100, opacity: 0, scale: 0.85 },
{
y: 0,
opacity: 1,
scale: 1,
stagger: 0.12,
duration: 0.8,
ease: "power4.out",
}
);
}, []);

return (
<>
{toast.show && (
<Toast
message={toast.message}
type={toast.type}
onClose={() => setToast({ ...toast, show: false })}
/>
)}

  <Box
    ref={sectionRef}
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
    {/* GLOW BLOBS */}
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
      My Projects
    </Typography>

    <Typography sx={{ textAlign: "center", color: "#aaa", mb: 6 }}>
      Some of my recent work 🚀
    </Typography>

    {/* GRID */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: "1fr 1fr",
          md: "1fr 1fr 1fr",
        },
        gap: 4,
      }}
    >
      {projects.map((project, i) => (
        <Box
          key={i}
          className="project-card"
          sx={{
            borderRadius: "20px",
            overflow: "hidden",
            backdropFilter: "blur(20px)",
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            transition: "0.4s",
            position: "relative",

            "&:hover": {
              transform: "translateY(-12px) scale(1.02)",
              boxShadow: "0 25px 80px rgba(255,106,0,0.4)",
            },
          }}
        >
          {/* IMAGE */}
          <Box
            component="img"
            src={project.image}
            alt={project.title}
            sx={{
              width: "100%",
              height: 200,
              objectFit: "cover",
              transition: "0.5s",
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          />

          {/* CONTENT */}
          <Box sx={{ p: 3 }}>
            <Typography sx={{ fontWeight: 700, fontSize: "1.2rem" }}>
              {project.title}
            </Typography>

            <Typography
              sx={{ color: "#aaa", fontSize: "0.9rem", my: 1 }}
            >
              {project.desc}
            </Typography>

            {/* TECH */}
            <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
              {project.tech.map((tech, idx) => (
                <Chip
                  key={idx}
                  label={tech}
                  sx={{
                    background: "rgba(255,255,255,0.1)",
                    color: "#fff",
                    border: "1px solid rgba(255,255,255,0.2)",
                  }}
                />
              ))}
            </Stack>

            {/* BUTTONS */}
            <Stack direction="row" spacing={2}>
              <Button
                fullWidth
                startIcon={<FaExternalLinkAlt />}
                onClick={() =>
                  window.open(project.liveLink, "_blank")
                }
                sx={{
                  borderRadius: "30px",
                  background:
                    "linear-gradient(90deg,#ff6a00,#00c6ff)",
                  color: "#fff",
                  fontWeight: 600,
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                Live
              </Button>

              <Button
                fullWidth
                startIcon={<FaGithub />}
                onClick={() => {
                  if (project.showCode) {
                    window.open(project.codeLink, "_blank");
                  } else {
                    setToast({
                      show: true,
                      message:
                        "I can't show this project source code 🔒",
                      type: "error",
                    });
                  }
                }}
                sx={{
                  borderRadius: "30px",
                  background: "rgba(255,255,255,0.1)",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.2)",
                }}
              >
                Code
              </Button>
            </Stack>
          </Box>
        </Box>
      ))}
    </Box>

    {/* CTA */}
    <Box sx={{ textAlign: "center", mt: 8 }}>
      <Typography sx={{ mb: 2, color: "#aaa" }}>
        Want to build something amazing together?
      </Typography>

      <Button
        onClick={() => navigate("/contact")}
        sx={{
          px: 6,
          py: 1.5,
          borderRadius: "40px",
          fontWeight: 700,
          background:
            "linear-gradient(90deg,#ff6a00,#00c6ff)",
          color: "#fff",
          boxShadow: "0 10px 40px rgba(255,106,0,0.5)",
          "&:hover": {
            transform: "scale(1.1)",
          },
        }}
      >
        Contact Me 🚀
      </Button>
    </Box>
  </Box>
</>

);
}