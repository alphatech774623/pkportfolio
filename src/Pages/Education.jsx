import { useEffect, useRef } from "react";
import gsap from "gsap";
import {
  FaGraduationCap,
  FaCertificate,
  FaCode,
  FaLaptopCode,
  FaRocket,
  FaBookOpen,
  FaCheckCircle,
  FaArrowRight,
  FaUniversity,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiJavascript,
  SiGithub,
} from "react-icons/si";



const educationData = [
  {
    id: 1,
    period: "2023 — 2026",
    status: "CURRENT",
    title: "Diploma in Computer Science & Engineering",
    institution: "Government Polytechnic Roorkee, Baheri, Bareilly",
    description:
      "Formal foundation in computer science combined with hands-on full-stack development, real-world projects and continuous self-learning.",
    icon: <FaGraduationCap />,
  },
  {
    id: 2,
    period: "Completed — 2023",
    status: "COMPLETED",
    title: "High School & Intermediate",
    institution: "Deep Dev Inter College, Haldharpur, Mau",
    description:
      "Completed school-level education before pursuing computer science and software development.",
    icon: <FaUniversity />,
  },
  {
    id: 3,
    period: "2023",
    status: "COMPLETED",
    title: "Advanced Diploma in Computer Application",
    institution: "ADCA — Computer Application Program",
    description:
      "Additional foundation in computer applications, productivity tools and practical computing concepts.",
    icon: <FaLaptopCode />,
  },
];

const certifications = [
  {
    title: "Job Ready Skills",
    issuer: "Wadhwani Foundation",
    type: "Professional Development",
    icon: <FaCertificate />,
  },
  {
    title: "Industrial Training — MERN Stack",
    issuer: "Techpile Technology Pvt. Ltd.",
    type: "Technical Training",
    icon: <FaCode />,
  },
  {
    title: "Advanced Diploma in Computer Application",
    issuer: "ADCA",
    type: "Computer Applications",
    icon: <FaLaptopCode />,
  },
];

const learningAreas = [
  {
    icon: <SiReact />,
    title: "Full Stack Development",
    description:
      "Building complete MERN applications across frontend, backend, APIs and databases.",
  },
  {
    icon: <FaCode />,
    title: "Software Engineering",
    description:
      "Exploring application architecture, system design, authentication and scalable project structure.",
  },
  {
    icon: <SiGithub />,
    title: "Development Workflow",
    description:
      "Git, GitHub, deployment workflows, debugging and collaborative development practices.",
  },
  {
    icon: <FaRocket />,
    title: "AI & Automation",
    description:
      "Using modern AI-assisted development tools and n8n automation to improve development workflows.",
  },
];

export default function Education() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".education-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".education-title",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".education-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.35"
        )
        .from(
          ".education-highlight",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        );

      gsap.from(".education-timeline-item", {
        y: 40,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.45,
      });

      gsap.from(".certificate-card", {
        y: 35,
        opacity: 0,
        duration: 0.6,
        stagger: 0.12,
        delay: 0.7,
      });

      gsap.from(".learning-card", {
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        delay: 0.8,
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="education-page" ref={pageRef}>
      {/* BACKGROUND */}

      <div className="education-grid-background"></div>

      <div className="education-glow education-glow-one"></div>
      <div className="education-glow education-glow-two"></div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="education-header">
        <div className="container">
          <div className="education-eyebrow">
            <span></span>
            EDUCATION & QUALIFICATION
          </div>

          <h1 className="education-title">
            My journey
            <span>so far.</span>
          </h1>

          <p className="education-description">
            My formal education provides the foundation. My projects,
            technical exploration and continuous self-learning define
            how I have grown as a developer.
          </p>

          {/* HIGHLIGHT */}

          <div className="education-highlight">
            <div className="education-highlight-icon">
              <FaBookOpen />
            </div>

            <div>
              <div className="education-highlight-label">
                BEYOND THE CLASSROOM
              </div>

              <h2>
                Learning by
                <span>building.</span>
              </h2>

              <p>
                Alongside my diploma, I continuously learn through
                documentation, free resources, technical communities,
                AI-assisted development and most importantly —
                building real applications.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          EDUCATION TIMELINE
      ====================================================== */}

      <section className="education-timeline-section">
        <div className="container">
          <div className="education-section-heading">
            <div className="education-section-label">
              ACADEMIC FOUNDATION
            </div>

            <h2>
              Education &
              <span>qualification.</span>
            </h2>

            <p>
              A focused academic path in computer science, supported
              by additional computer application training.
            </p>
          </div>

          <div className="education-timeline">
            <div className="education-timeline-line"></div>

            {educationData.map((item) => (
              <article
                className="education-timeline-item"
                key={item.id}
              >
                {/* TIMELINE DOT */}

                <div className="education-timeline-dot">
                  {item.icon}
                </div>

                {/* CARD */}

                <div className="education-card">
                  <div className="education-card-top">
                    <span className="education-period">
                      {item.period}
                    </span>

                    <span className="education-status">
                      {item.status}
                    </span>
                  </div>

                  <h3>{item.title}</h3>

                  <div className="education-institution">
                    {item.institution}
                  </div>

                  <p>{item.description}</p>

                  <div className="education-card-footer">
                    <FaCheckCircle />
                    <span>Computer Science & Technology</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          CERTIFICATIONS
      ====================================================== */}

      <section className="certifications-section">
        <div className="container">
          <div className="education-section-heading centered">
            <div className="education-section-label">
              CERTIFICATIONS
            </div>

            <h2>
              Credentials that
              <span>add context.</span>
            </h2>

            <p>
              Additional training and certifications that complement
              my formal computer science education.
            </p>
          </div>

          <div className="row g-3">
            {certifications.map((certificate) => (
              <div
                className="col-md-6 col-xl-4"
                key={certificate.title}
              >
                <article className="certificate-card">
                  <div className="certificate-icon">
                    {certificate.icon}
                  </div>

                  <div className="certificate-content">
                    <span>{certificate.type}</span>

                    <h3>{certificate.title}</h3>

                    <p>{certificate.issuer}</p>
                  </div>

                  <div className="certificate-arrow">
                    <FaArrowRight />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING JOURNEY
      ====================================================== */}

      <section className="learning-section">
        <div className="container">
          <div className="learning-header">
            <div>
              <div className="education-section-label">
                CONTINUOUS LEARNING
              </div>

              <h2>
                What I'm learning
                <span>outside the syllabus.</span>
              </h2>
            </div>

            <p>
              My learning doesn't stop at what is taught in a
              classroom. I actively explore technologies and concepts
              required to build real-world software.
            </p>
          </div>

          <div className="row g-3">
            {learningAreas.map((item) => (
              <div
                className="col-sm-6 col-lg-3"
                key={item.title}
              >
                <article className="learning-card">
                  <div className="learning-icon">
                    {item.icon}
                  </div>

                  <h3>{item.title}</h3>

                  <p>{item.description}</p>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          LEARNING PHILOSOPHY
      ====================================================== */}

      <section className="education-philosophy-section">
        <div className="container">
          <div className="education-philosophy">
            <div className="philosophy-mark">
              <FaRocket />
            </div>

            <div className="philosophy-content">
              <div className="education-section-label">
                MY APPROACH
              </div>

              <h2>
                Qualifications show
                <span>where I started.</span>
              </h2>

              <p>
                My projects show how I apply what I learn. I believe
                strong developers are built through curiosity,
                consistent practice, problem solving and the willingness
                to learn whatever a problem demands.
              </p>
            </div>

            <div className="philosophy-stack">
              <div>
                <SiJavascript />
                JavaScript
              </div>

              <div>
                <SiReact />
                React
              </div>

              <div>
                <SiNodedotjs />
                Node.js
              </div>

              <div>
                <SiMongodb />
                MongoDB
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}