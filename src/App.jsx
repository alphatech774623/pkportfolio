import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.jsx";
import Contact from "./Pages/Contact.jsx";
import Projects from "./Pages/Projects.jsx";
import Skills from "./Pages/Skills.jsx";
import Education from "./Pages/Education.jsx";
import { Box, IconButton } from "@mui/material";
import { FaBars } from "react-icons/fa";
import Sidebar from "./Components/Sidebar.jsx";

function App() {
const [sidebarOpen, setSidebarOpen] = useState(false);

const toggleSidebar = () => setSidebarOpen((prev) => !prev);

return (
<Router>
<Box sx={{ display: "flex" }}>

    {/* SIDEBAR */}
    <Sidebar isOpen={sidebarOpen} onToggle={toggleSidebar} />

    {/* OVERLAY (mobile only) */}
    {sidebarOpen && (
      <Box
        onClick={toggleSidebar}
        sx={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100vh",
          background: "rgba(0,0,0,0.6)",
          zIndex: 999,
          display: { xs: "block", md: "none" },
        }}
      />
    )}

    {/* MAIN CONTENT */}
    <Box
      sx={{
        flex: 1,
        minHeight: "100vh",
        position: "relative",
        ml: { md: "260px" }, // ✅ desktop sidebar space
      }}
    >
      {/* MENU BUTTON (mobile) */}
      <IconButton
        onClick={toggleSidebar}
        sx={{
          display: { xs: "block", md: "none" },
          position: "fixed",
          top: 20,
          left: 20,
          zIndex: 2000,
          color: "#fff",
        }}
      >
        <FaBars />
      </IconButton>

      {/* ROUTES */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/education" element={<Education />} />
      </Routes>
    </Box>
  </Box>
</Router>

);
}

export default App;