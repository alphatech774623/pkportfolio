import { NavLink } from "react-router-dom";
import { Divider, Typography, Box } from "@mui/material";
import {
FaHome,
FaEnvelope,
FaBriefcase,
FaCode,
FaGraduationCap,
} from "react-icons/fa";

function Sidebar({ isOpen, onToggle }) {
const items = [
{ label: "Home", path: "/", icon: <FaHome /> },
{ label: "Contact", path: "/contact", icon: <FaEnvelope /> },
{ label: "Projects", path: "/projects", icon: <FaBriefcase /> },
{ label: "Skills", path: "/skills", icon: <FaCode /> },
{ label: "Education", path: "/education", icon: <FaGraduationCap /> },
];

return (
<Box
sx={{
position: "fixed",
top: 0,
left: {
  xs: isOpen ? 0 : "-100%", // mobile
  md: 0,                    // desktop always visible
},
width: "260px",
height: "100vh",
transition: "0.4s ease",
zIndex: 1000,

    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  background: "linear-gradient(180deg, #0f172a, #020617)",
backdropFilter: "blur(20px)",
    borderRight: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 0 40px rgba(0,0,0,0.6)",
    p: 3,
  }}
>
  {/* PROFILE */}
  <Box sx={{ textAlign: "center", mb: 3 }}>
    <Box
      component="img"
      src="/profilePic.png"
      alt="Profile"
      sx={{
        width: 90,
        height: 90,
        borderRadius: "50%",
        border: "3px solid #ff6a00",
        boxShadow:
          "0 0 20px #ff6a00, 0 0 40px rgba(0,198,255,0.5)",
        mb: 1,
      }}
    />

    <Typography
      sx={{
        fontWeight: 700,
        fontSize: "1.1rem",
        background: "linear-gradient(90deg,#ff6a00,#00c6ff)",
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      Prince Maurya
    </Typography>
  </Box>

  <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 2 }} />

  {/* LINKS */}
  <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
    {items.map((item) => (
      <NavLink
        key={item.path}
        to={item.path}
        end
        onClick={() => window.innerWidth < 768 && onToggle()}
        style={{ textDecoration: "none" }}
      >
        {({ isActive }) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              px: 2,
              py: 1.5,
              borderRadius: "12px",
              color: isActive ? "#fff" : "#aaa",
              transition: "0.3s",
              position: "relative",

              background: isActive
                ? "linear-gradient(90deg,#ff6a00,#00c6ff)"
                : "transparent",

              "&:hover": {
                background: "rgba(255,255,255,0.08)",
                transform: "translateX(5px)",
              },

              "& svg": {
                fontSize: "1.2rem",
                transition: "0.3s",
              },

              "&:hover svg": {
                color: "#00c6ff",
                transform: "scale(1.2)",
              },
            }}
          >
            {item.icon}
            <span style={{ fontWeight: 500 }}>{item.label}</span>

            {/* Glow line */}
            {isActive && (
              <Box
                sx={{
                  position: "absolute",
                  right: 0,
                  width: "4px",
                  height: "60%",
                  borderRadius: "10px",
                  background: "#fff",
                  boxShadow: "0 0 10px #fff",
                }}
              />
            )}
          </Box>
        )}
      </NavLink>
    ))}
  </Box>
</Box>

);
}

export default Sidebar;