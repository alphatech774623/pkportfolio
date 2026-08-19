import { Box, Typography } from "@mui/material";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaCheckCircle,
  FaCalendarAlt,
} from "react-icons/fa";
import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiBootstrap,
  SiGit,
  SiGithub,
} from "react-icons/si";

gsap.registerPlugin(ScrollTrigger);

const educationData = [
  {
    title: "Diploma in Computer Science",
    place: "Government Polytechnic Roorkee, Baheri Bareilly",
    year: "2023 - 2026",
    tag: "CORE EDUCATION",
    icon: <FaGraduationCap />,
  },
  {
    title: "High School & Intermediate",
    place: "Deep Dev Inter College, Haldharpur Mau",
    year: "Till 2023",
    tag: "FOUNDATION",
    icon: <FaGraduationCap />,
  },
];

const certifications = [
  {
    title: "Wadhwani Foundation",
    subtitle: "Job Ready Skills Certificate",
    meta: "Professional & employability skills",
    icon: <FaCertificate />,
  },
  {
    title: "Advanced Diploma in Computer Application",
    subtitle: "ADCA Certificate",
    meta: "Computer applications & practical computing",
    icon: <FaCertificate />,
  },
  {
    title: "Techpile Technology Pvt. Ltd.",
    subtitle: "Summer Training Certificate",
    meta: "MERN Stack / Industrial Training",
    icon: <FaCertificate />,
  },
];

const skillGroups = [
  {
    title: "Frontend Engineering",
    description: "Building responsive, interactive and component-based web interfaces.",
    icon: <FaLaptopCode />,
    skills: [
      ["React", <SiReact />],
      ["JavaScript", <SiJavascript />],
      ["Bootstrap", <SiBootstrap />],
    ],
  },
  {
    title: "Backend & Database",
    description: "Designing APIs, server-side logic and data-driven applications.",
    icon: <FaCode />,
    skills: [
      ["Node.js", <SiNodedotjs />],
      ["Express", <SiExpress />],
      ["MongoDB", <SiMongodb />],
    ],
  },
  {
    title: "Engineering Workflow",
    description: "Working with real project workflows, version control and deployment.",
    icon: <FaRocket />,
    skills: [
      ["Git", <SiGit />],
      ["GitHub", <SiGithub />],
      ["REST APIs", <FaCode />],
    ],
  },
];

export default function Education() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".edu-hero-content",
        { y: 45, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          ease: "power4.out",
        }
      );

      gsap.fromTo(
        ".edu-timeline-card",
        { y: 70, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.16,
          duration: 0.8,
          ease: "power4.out",
          scrollTrigger: {
            trigger: ".edu-timeline",
            start: "top 78%",
          },
        }
      );

      gsap.fromTo(
        ".edu-cert-card",
        { y: 50, opacity: 0, scale: 0.97 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          stagger: 0.14,
          duration: 0.75,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".edu-cert-grid",
            start: "top 82%",
          },
        }
      );

      gsap.fromTo(
        ".skill-panel",
        { y: 55, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.14,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".skill-grid",
            start: "top 82%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <Box
      ref={sectionRef}
      sx={{
        minHeight: "100vh",
        px: { xs: 2, sm: 3, md: 6, lg: 9 },
        py: { xs: 8, md: 12 },
        color: "#fff",
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 12% 8%, rgba(37,99,235,.14), transparent 28%), radial-gradient(circle at 88% 72%, rgba(14,165,233,.10), transparent 28%), #070b12",
      }}
    >
      {/* Ambient premium glow */}
      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 360 },
          height: { xs: 180, md: 360 },
          borderRadius: "50%",
          background: "rgba(37,99,235,.18)",
          filter: "blur(120px)",
          top: -100,
          left: -100,
          pointerEvents: "none",
        }}
      />
      <Box
        sx={{
          position: "absolute",
          width: { xs: 180, md: 330 },
          height: { xs: 180, md: 330 },
          borderRadius: "50%",
          background: "rgba(14,165,233,.12)",
          filter: "blur(120px)",
          bottom: -100,
          right: -100,
          pointerEvents: "none",
        }}
      />

      {/* HERO */}
      <Box
        className="edu-hero-content"
        sx={{
          maxWidth: 980,
          mx: "auto",
          textAlign: "center",
          position: "relative",
          zIndex: 1,
          mb: { xs: 7, md: 10 },
        }}
      >
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            gap: 1,
            px: 1.8,
            py: 0.8,
            mb: 2.5,
            borderRadius: 99,
            border: "1px solid rgba(96,165,250,.20)",
            background: "rgba(37,99,235,.07)",
            color: "#60a5fa",
            fontSize: 11,
            fontWeight: 800,
            letterSpacing: 1.7,
          }}
        >
          <FaCode /> QUALIFICATION • SKILLS • CONTINUOUS LEARNING
        </Box>

        <Typography
          component="h1"
          sx={{
            fontSize: { xs: "2.25rem", sm: "3rem", md: "4rem" },
            lineHeight: 1.05,
            fontWeight: 900,
            letterSpacing: "-2px",
            background: "linear-gradient(135deg,#fff 20%,#60a5fa 55%,#38bdf8 90%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 2.2,
          }}
        >
          Education is the foundation.
          <br />
          <Box component="span" sx={{ color: "#60a5fa" }}>
            Skills are the advantage.
          </Box>
        </Typography>

        <Typography
          sx={{
            maxWidth: 720,
            mx: "auto",
            color: "#8f9bad",
            fontSize: { xs: 14, md: 16 },
            lineHeight: 1.8,
          }}
        >
          My formal education is focused on Computer Science, but most of my
          growth comes from building real applications, solving engineering
          problems and continuously expanding my technical knowledge.
        </Typography>

        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.2,
            mt: 3.5,
          }}
        >
          {["MERN Stack", "Problem Solving", "Real Projects", "Continuous Learning"].map(
            (item) => (
              <Box
                key={item}
                sx={{
                  px: 1.7,
                  py: 0.9,
                  borderRadius: 99,
                  color: "#cbd5e1",
                  fontSize: 12,
                  fontWeight: 600,
                  background: "rgba(255,255,255,.035)",
                  border: "1px solid rgba(255,255,255,.08)",
                }}
              >
                <FaCheckCircle style={{ color: "#60a5fa", marginRight: 7 }} />
                {item}
              </Box>
            )
          )}
        </Box>
      </Box>

      {/* EDUCATION */}
      <Box sx={{ maxWidth: 1100, mx: "auto", position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography
            sx={{ color: "#60a5fa", fontSize: 11, fontWeight: 800, letterSpacing: 2 }}
          >
            FORMAL EDUCATION
          </Typography>
          <Typography
            component="h2"
            sx={{ mt: 1, fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 800 }}
          >
            Academic Journey
          </Typography>
        </Box>

        <Box className="edu-timeline" sx={{ position: "relative" }}>
          <Box
            sx={{
              position: "absolute",
              top: 18,
              bottom: 18,
              left: { xs: 10, md: "50%" },
              width: 1,
              background: "linear-gradient(#2563eb,rgba(96,165,250,.08))",
              transform: { md: "translateX(-50%)" },
            }}
          />

          {educationData.map((item, i) => (
            <Box
              key={item.title}
              className="edu-timeline-card"
              sx={{
                position: "relative",
                width: { xs: "100%", md: "50%" },
                ml: { xs: 0, md: i % 2 === 0 ? 0 : "50%" },
                pl: { xs: 4, md: i % 2 === 0 ? 0 : 5 },
                pr: { xs: 0, md: i % 2 === 0 ? 5 : 0 },
                mb: { xs: 3, md: 5 },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 22,
                  left: { xs: 3, md: i % 2 === 0 ? "100%" : 0 },
                  width: 15,
                  height: 15,
                  borderRadius: "50%",
                  background: "#2563eb",
                  border: "3px solid #0b1220",
                  boxShadow: "0 0 0 4px rgba(37,99,235,.14), 0 0 22px rgba(37,99,235,.55)",
                  transform: { md: i % 2 === 0 ? "translateX(-50%)" : "translateX(-50%)" },
                  zIndex: 2,
                }}
              />

              <Box
                sx={{
                  p: { xs: 2.5, md: 3.2 },
                  borderRadius: "20px",
                  background: "linear-gradient(145deg,rgba(255,255,255,.065),rgba(255,255,255,.025))",
                  border: "1px solid rgba(255,255,255,.09)",
                  backdropFilter: "blur(18px)",
                  boxShadow: "0 18px 60px rgba(0,0,0,.20)",
                  transition: "all .35s ease",
                  "&:hover": {
                    transform: "translateY(-6px)",
                    borderColor: "rgba(96,165,250,.35)",
                    boxShadow: "0 25px 70px rgba(37,99,235,.16)",
                  },
                }}
              >
                <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
                  <Box
                    sx={{
                      width: 44,
                      height: 44,
                      flexShrink: 0,
                      display: "grid",
                      placeItems: "center",
                      borderRadius: "13px",
                      color: "#60a5fa",
                      background: "rgba(37,99,235,.11)",
                      border: "1px solid rgba(96,165,250,.14)",
                      fontSize: 19,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Box sx={{ flex: 1 }}>
                    <Typography sx={{ color: "#60a5fa", fontSize: 10, fontWeight: 800, letterSpacing: 1.4 }}>
                      {item.tag}
                    </Typography>
                    <Typography sx={{ mt: 0.6, fontSize: { xs: 17, md: 20 }, fontWeight: 800 }}>
                      {item.title}
                    </Typography>
                    <Typography sx={{ color: "#8f9bad", mt: 1, fontSize: 13, lineHeight: 1.6 }}>
                      {item.place}
                    </Typography>
                    <Box sx={{ display: "inline-flex", alignItems: "center", gap: .8, mt: 1.5, color: "#cbd5e1", fontSize: 12 }}>
                      <FaCalendarAlt style={{ color: "#60a5fa" }} /> {item.year}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* CERTIFICATIONS */}
      <Box sx={{ maxWidth: 1100, mx: "auto", mt: { xs: 7, md: 10 }, position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography sx={{ color: "#60a5fa", fontSize: 11, fontWeight: 800, letterSpacing: 2 }}>
            CERTIFICATIONS
          </Typography>
          <Typography component="h2" sx={{ mt: 1, fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 800 }}>
            Proof of Continuous Learning
          </Typography>
          <Typography sx={{ color: "#7f8b9d", mt: 1.5, fontSize: 14 }}>
            Certifications support the journey — practical skills make it valuable.
          </Typography>
        </Box>

        <Box
          className="edu-cert-grid"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2.2,
          }}
        >
          {certifications.map((item) => (
            <Box
              key={item.title}
              className="edu-cert-card"
              sx={{
                p: { xs: 2.5, md: 3 },
                minHeight: 190,
                borderRadius: "20px",
                background: "linear-gradient(145deg,rgba(255,255,255,.06),rgba(255,255,255,.025))",
                border: "1px solid rgba(255,255,255,.09)",
                backdropFilter: "blur(18px)",
                transition: "all .35s ease",
                "&:hover": {
                  transform: "translateY(-7px)",
                  borderColor: "rgba(96,165,250,.35)",
                  boxShadow: "0 24px 60px rgba(37,99,235,.15)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mb: 2.5 }}>
                <Box sx={{ width: 43, height: 43, display: "grid", placeItems: "center", borderRadius: 12, color: "#60a5fa", background: "rgba(37,99,235,.1)", fontSize: 18 }}>
                  {item.icon}
                </Box>
                <Typography sx={{ color: "#64748b", fontSize: 10, fontWeight: 800, letterSpacing: 1 }}>
                  VERIFIED LEARNING
                </Typography>
              </Box>
              <Typography sx={{ fontSize: 17, fontWeight: 800, lineHeight: 1.35 }}>
                {item.title}
              </Typography>
              <Typography sx={{ mt: 1, color: "#60a5fa", fontSize: 13, fontWeight: 700 }}>
                {item.subtitle}
              </Typography>
              <Typography sx={{ mt: 1.2, color: "#7f8b9d", fontSize: 12, lineHeight: 1.6 }}>
                {item.meta}
              </Typography>
            </Box>
          ))}
        </Box>
      </Box>

      {/* SKILLS / KNOWLEDGE */}
      <Box sx={{ maxWidth: 1100, mx: "auto", mt: { xs: 8, md: 12 }, position: "relative", zIndex: 1 }}>
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <Typography sx={{ color: "#60a5fa", fontSize: 11, fontWeight: 800, letterSpacing: 2 }}>
            BEYOND THE CLASSROOM
          </Typography>
          <Typography component="h2" sx={{ mt: 1, fontSize: { xs: "1.8rem", md: "2.5rem" }, fontWeight: 800 }}>
            Skills & Technical Knowledge
          </Typography>
          <Typography sx={{ maxWidth: 700, mx: "auto", color: "#7f8b9d", mt: 1.5, fontSize: 14, lineHeight: 1.7 }}>
            Formal qualification tells you where I studied. This is the part that shows what I can actually build and work with.
          </Typography>
        </Box>

        <Box
          className="skill-grid"
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
            gap: 2.2,
          }}
        >
          {skillGroups.map((group) => (
            <Box
              key={group.title}
              className="skill-panel"
              sx={{
                p: { xs: 2.5, md: 3 },
                borderRadius: "20px",
                background: "rgba(255,255,255,.035)",
                border: "1px solid rgba(255,255,255,.08)",
                transition: "all .35s ease",
                "&:hover": {
                  transform: "translateY(-6px)",
                  background: "rgba(37,99,235,.055)",
                  borderColor: "rgba(96,165,250,.25)",
                },
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: 1.4, mb: 1.5 }}>
                <Box sx={{ color: "#60a5fa", fontSize: 18 }}>{group.icon}</Box>
                <Typography sx={{ fontWeight: 800, fontSize: 16 }}>{group.title}</Typography>
              </Box>
              <Typography sx={{ color: "#7f8b9d", fontSize: 12.5, lineHeight: 1.65, minHeight: { md: 43 } }}>
                {group.description}
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mt: 2.5 }}>
                {group.skills.map(([name, icon]) => (
                  <Box
                    key={name}
                    sx={{
                      display: "inline-flex",
                      alignItems: "center",
                      gap: .7,
                      px: 1.2,
                      py: .75,
                      borderRadius: 10,
                      color: "#cbd5e1",
                      fontSize: 11,
                      fontWeight: 700,
                      background: "rgba(255,255,255,.04)",
                      border: "1px solid rgba(255,255,255,.07)",
                    }}
                  >
                    <Box sx={{ color: "#60a5fa", display: "flex" }}>{icon}</Box>
                    {name}
                  </Box>
                ))}
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      {/* Closing statement */}
      <Box
        sx={{
          maxWidth: 850,
          mx: "auto",
          mt: { xs: 8, md: 11 },
          p: { xs: 3, md: 4 },
          textAlign: "center",
          borderRadius: "24px",
          background: "linear-gradient(135deg,rgba(37,99,235,.10),rgba(14,165,233,.035))",
          border: "1px solid rgba(96,165,250,.13)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Typography sx={{ fontSize: { xs: 17, md: 21 }, fontWeight: 800, lineHeight: 1.5 }}>
          "My qualification is a diploma. My learning is much bigger than a degree title."
        </Typography>
        <Typography sx={{ mt: 1.2, color: "#7f8b9d", fontSize: 12.5 }}>
          I focus on practical engineering, real-world projects and continuous self-learning.
        </Typography>
      </Box>
    </Box>
  );
}
