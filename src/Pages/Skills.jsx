import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaWordpress,
  FaServer,
  FaDatabase,
  FaCode,
  FaLayerGroup,
  FaCloud,
  FaMobileAlt,
  FaCogs,
  FaLightbulb,
  FaGraduationCap,
  FaProjectDiagram,
  FaUsers,
  FaRocket,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiBootstrap,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiCloudinary,
  SiGooglecloud,
  SiN8N,
  SiJavascript,
  SiPostman,
  SiJsonwebtokens,
} from "react-icons/si";

const skillCategories = [
  {
    id: "fullstack",
    label: "Full Stack",
    icon: <FaLayerGroup />,
    description:
      "Building complete web applications from frontend interfaces to backend APIs and databases.",
    skills: [
      {
        name: "MERN Stack",
        icon: <FaLayerGroup />,
        level: "Core",
        description:
          "MongoDB, Express.js, React and Node.js application development.",
      },
      {
        name: "React",
        icon: <FaReact />,
        level: "Core",
        description:
          "Component-based interfaces, routing, hooks and application state.",
      },
      {
        name: "Node.js",
        icon: <FaNodeJs />,
        level: "Core",
        description:
          "Backend services, APIs, asynchronous operations and server-side logic.",
      },
      {
        name: "REST APIs",
        icon: <FaServer />,
        level: "Core",
        description:
          "Designing and integrating RESTful APIs for full-stack applications.",
      },
    ],
  },

  {
    id: "frontend",
    label: "Frontend & UI",
    icon: <FaCode />,
    description:
      "Creating responsive, accessible and modern interfaces across desktop, tablet and mobile.",
    skills: [
      {
        name: "JavaScript",
        icon: <SiJavascript />,
        level: "Core",
        description:
          "Modern ES6+ JavaScript and asynchronous programming.",
      },
      {
        name: "HTML5",
        icon: <FaHtml5 />,
        level: "Core",
        description:
          "Semantic and structured web page development.",
      },
      {
        name: "CSS3",
        icon: <FaCss3Alt />,
        level: "Core",
        description:
          "Responsive layouts, animations, transitions and custom UI styling.",
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap />,
        level: "Core",
        description:
          "Responsive grid systems and reusable UI components.",
      },
      {
        name: "Tailwind CSS",
        icon: <SiTailwindcss />,
        level: "Familiar",
        description:
          "Utility-first responsive styling and rapid interface development.",
      },
      {
        name: "Responsive Design",
        icon: <FaMobileAlt />,
        level: "Core",
        description:
          "Mobile-first layouts and responsive user experiences.",
      },
      {
        name: "Redux Toolkit",
        icon: <SiRedux />,
        level: "Working",
        description:
          "Centralized state management for React applications.",
      },
      {
        name: "GSAP",
        icon: <FaRocket />,
        level: "Working",
        description:
          "Smooth UI animations and interactive motion experiences.",
      },
    ],
  },

  {
    id: "backend",
    label: "Backend & Database",
    icon: <FaServer />,
    description:
      "Designing backend systems, APIs, authentication flows and application data models.",
    skills: [
      {
        name: "Express.js",
        icon: <SiExpress />,
        level: "Core",
        description:
          "API routing, middleware and backend application architecture.",
      },
      {
        name: "MongoDB",
        icon: <SiMongodb />,
        level: "Core",
        description:
          "NoSQL database design and application data management.",
      },
      {
        name: "Mongoose",
        icon: <FaDatabase />,
        level: "Core",
        description:
          "Schemas, models, validation and MongoDB application integration.",
      },
      {
        name: "Authentication",
        icon: <SiJsonwebtokens />,
        level: "Working",
        description:
          "JWT, cookies, protected routes and role-based authorization.",
      },
      {
        name: "Cloudinary",
        icon: <SiCloudinary />,
        level: "Working",
        description:
          "Cloud-based image and media management.",
      },
      {
        name: "API Integration",
        icon: <FaCogs />,
        level: "Working",
        description:
          "Connecting frontend applications with external and internal APIs.",
      },
    ],
  },

  {
    id: "tools",
    label: "Tools & Workflow",
    icon: <FaGitAlt />,
    description:
      "Development tools and workflows I use to build, test, manage and deploy applications.",
    skills: [
      {
        name: "Git",
        icon: <FaGitAlt />,
        level: "Core",
        description:
          "Version control, branches, commits and collaborative workflows.",
      },
      {
        name: "GitHub",
        icon: <FaGithub />,
        level: "Core",
        description:
          "Repository management, collaboration and project workflows.",
      },
      {
        name: "Postman",
        icon: <SiPostman />,
        level: "Working",
        description:
          "Testing and debugging REST APIs.",
      },
      {
        name: "Vite",
        icon: <SiVite />,
        level: "Working",
        description:
          "Modern frontend development and build tooling.",
      },
      {
        name: "Google Cloud",
        icon: <SiGooglecloud />,
        level: "Working",
        description:
          "Cloud infrastructure and deployment experimentation.",
      },
      {
        name: "WordPress",
        icon: <FaWordpress />,
        level: "Working",
        description:
          "CMS-based website development and customization.",
      },
    ],
  },

  {
    id: "automation",
    label: "Automation & AI",
    icon: <FaCogs />,
    description:
      "Using automation and AI-assisted development tools to improve productivity and workflows.",
    skills: [
      {
        name: "n8n Workflows",
        icon: <SiN8N />,
        level: "Working",
        description:
          "Workflow automation and connecting different services together.",
      },
      {
        name: "ChatGPT",
        icon: <FaLightbulb />,
        level: "Development Tool",
        description:
          "Research, debugging, architecture exploration and development assistance.",
      },
      {
        name: "Codex",
        icon: <FaCode />,
        level: "Development Tool",
        description:
          "AI-assisted coding, repository work and development workflows.",
      },
      {
        name: "Automation Thinking",
        icon: <FaCogs />,
        level: "Strength",
        description:
          "Identifying repetitive processes that can be automated.",
      },
    ],
  },

  {
    id: "engineering",
    label: "Engineering & Mindset",
    icon: <FaProjectDiagram />,
    description:
      "Problem-solving and engineering skills that influence how I approach software development.",
    skills: [
      {
        name: "System Design",
        icon: <FaProjectDiagram />,
        level: "Learning",
        description:
          "Understanding application components, data flow and system architecture.",
      },
      {
        name: "Architecture",
        icon: <FaLayerGroup />,
        level: "Learning",
        description:
          "Structuring frontend, backend, database and service layers.",
      },
      {
        name: "Problem Solving",
        icon: <FaLightbulb />,
        level: "Strength",
        description:
          "Breaking complex development problems into smaller solvable parts.",
      },
      {
        name: "Self Learning",
        icon: <FaGraduationCap />,
        level: "Strength",
        description:
          "Learning technologies through documentation, free resources and hands-on projects.",
      },
      {
        name: "Self Motivated",
        icon: <FaRocket />,
        level: "Strength",
        description:
          "Consistently building and experimenting beyond academic coursework.",
      },
      {
        name: "Product Thinking",
        icon: <FaUsers />,
        level: "Working",
        description:
          "Thinking about users, workflows and the actual problem a product solves.",
      },
    ],
  },
];

function Skills() {
  const [activeCategory, setActiveCategory] = useState("fullstack");

  const pageRef = useRef(null);

  const activeData = skillCategories.find(
    (category) => category.id === activeCategory
  );

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".skills-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".skills-title",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".skills-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.35"
        )
        .from(
          ".skills-summary-card",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.2"
        );

      gsap.from(".skill-card", {
        y: 30,
        opacity: 0,
        scale: 0.97,
        duration: 0.55,
        stagger: 0.07,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <main className="skills-page" ref={pageRef}>
      {/* BACKGROUND */}
      <div className="skills-grid-background"></div>

      <div className="skills-glow skills-glow-one"></div>
      <div className="skills-glow skills-glow-two"></div>

      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="skills-header">
        <div className="container">
          <div className="skills-eyebrow">
            <span></span>
            SKILLS & EXPERTISE
          </div>

          <h1 className="skills-title">
            What I can
            <span>build.</span>
          </h1>

          <p className="skills-description">
            A combination of full-stack development, responsive UI,
            backend engineering, automation and problem-solving skills
            developed through hands-on projects and continuous learning.
          </p>

          {/* SUMMARY */}
          <div className="skills-summary-card">
            <div className="summary-item">
              <strong>MERN</strong>
              <span>Primary Development Stack</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-item">
              <strong>Full Stack</strong>
              <span>Frontend → Backend → Database</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-item">
              <strong>AI + Automation</strong>
              <span>Modern Development Workflow</span>
            </div>

            <div className="summary-divider"></div>

            <div className="summary-item">
              <strong>Always Learning</strong>
              <span>Hands-on & self driven</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CATEGORY NAVIGATION
      ====================================================== */}

      <section className="skills-main-section">
        <div className="container">
          <div className="skills-category-nav">
            {skillCategories.map((category) => (
              <button
                type="button"
                key={category.id}
                className={`skill-category-button ${
                  activeCategory === category.id ? "active" : ""
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="category-icon">
                  {category.icon}
                </span>

                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* =================================================
              ACTIVE CATEGORY
          ================================================== */}

          <div className="active-category-header">
            <div>
              <div className="active-category-label">
                <span></span>
                {activeData.label}
              </div>

              <h2>{activeData.label}</h2>
            </div>

            <p>{activeData.description}</p>
          </div>

          {/* =================================================
              SKILL CARDS
          ================================================== */}

          <div className="row g-3">
            {activeData.skills.map((skill) => (
              <div
                className="col-sm-6 col-lg-4 skill-card-wrapper"
                key={skill.name}
              >
                <article className="skill-card">
                  <div className="skill-card-top">
                    <div className="skill-icon">
                      {skill.icon}
                    </div>

                    <span className="skill-level">
                      {skill.level}
                    </span>
                  </div>

                  <h3>{skill.name}</h3>

                  <p>{skill.description}</p>

                  <div className="skill-card-footer">
                    <FaCheckCircle />
                    <span>Hands-on development</span>
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          DEVELOPMENT APPROACH
      ====================================================== */}

      <section className="development-section">
        <div className="container">
          <div className="development-wrapper">
            <div className="development-content">
              <div className="section-label-skills">
                DEVELOPMENT APPROACH
              </div>

              <h2>
                I learn by
                <span>building.</span>
              </h2>

              <p>
                My strongest learning comes from actually building
                applications. Instead of only following tutorials, I
                prefer taking an idea, breaking it into smaller problems,
                researching the required concepts and implementing the
                solution myself.
              </p>

              <p>
                This approach has helped me work across frontend,
                backend, databases, authentication, APIs, deployment,
                automation and product architecture.
              </p>
            </div>

            <div className="development-points">
              <div>
                <span>01</span>

                <div>
                  <h3>Understand the problem</h3>

                  <p>
                    Identify users, requirements and application
                    workflows before writing code.
                  </p>
                </div>
              </div>

              <div>
                <span>02</span>

                <div>
                  <h3>Design the solution</h3>

                  <p>
                    Think about components, APIs, data models and
                    system architecture.
                  </p>
                </div>
              </div>

              <div>
                <span>03</span>

                <div>
                  <h3>Build & debug</h3>

                  <p>
                    Implement the solution, test it and systematically
                    solve problems as they appear.
                  </p>
                </div>
              </div>

              <div>
                <span>04</span>

                <div>
                  <h3>Improve & ship</h3>

                  <p>
                    Refine the experience, improve architecture and
                    deploy the working product.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="skills-cta">
        <div className="container">
          <div className="skills-cta-inner">
            <div>
              <div className="section-label-skills">
                LET'S BUILD
              </div>

              <h2>
                Have a problem
                <span>worth solving?</span>
              </h2>

              <p>
                I'm interested in building useful products, solving
                challenging technical problems and continuously improving
                as a developer.
              </p>
            </div>

            <a href="/contact" className="skills-cta-button">
              Let's Talk
              <FaRocket />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Skills;