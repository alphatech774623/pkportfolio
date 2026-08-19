import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import {
  FaArrowRight,
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

import {
  SiReact,
  SiNodedotjs,
  SiMongodb,
  SiExpress,
  SiWordpress,
  SiBootstrap,
  SiGooglecloud,
  SiCloudinary,
  SiJavascript,
  SiGsap,
} from "react-icons/si";

import Toast from "../Components/Toast";


const projects = [
  {
    id: "fixkar",
    number: "01",
    featured: true,
    type: "FULL STACK PRODUCT",
    title: "Fixkar Smart Services",
    shortTitle: "Fixkar",
    desc: "A service marketplace designed to connect customers with local professionals for home and business services.",
    image: "/fixkar.png",

    overview:
      "A real-world MERN application concept focused on customer-professional discovery, onboarding, bookings, payments and service management.",

    features: [
      "Customer & professional workflows",
      "Authentication & authorization",
      "Professional onboarding",
      "Booking architecture",
      "Payment workflow",
      "Location-based discovery",
    ],

    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Google Cloud", icon: <SiGooglecloud /> },
    ],

    liveLink: "https://fixkarr.com",
    codeLink: "",
    showCode: false,
  },

  {
    id: "alphatechdev",
    number: "02",
    type: "WORDPRESS / CMS",
    title: "Alpha Tech Dev",
    desc: "A technology-focused blog platform built for publishing development, gadgets and software-related content.",
    image: "/alphatechdev.png",

    features: [
      "Content management",
      "Responsive design",
      "SEO-focused structure",
      "Custom website styling",
    ],

    tech: [
      { name: "WordPress", icon: <SiWordpress /> },
      { name: "SEO", icon: <FaCode /> },
      { name: "CMS", icon: <FaCode /> },
    ],

    liveLink: "https://alphatechdev.com",
    codeLink: "",
    showCode: false,
  },

  {
    id: "onndmnd",
    number: "03",
    type: "WEB APPLICATION",
    title: "OnnDmnd Platform",
    desc: "A modern landing platform focused on lead generation and capturing customer enquiries.",
    image: "/onndmnd.png",

    features: [
      "Responsive landing experience",
      "Lead capture workflow",
      "Google Sheets integration",
      "Conversion-focused UI",
    ],

    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
      { name: "Google Sheets", icon: <FaCode /> },
    ],

    liveLink: "https://onndmnd.com",
    codeLink: "https://github.com/alphatech774623/OnnDmnd",
    showCode: true,
  },

  {
    id: "portfolio",
    number: "04",
    type: "PERSONAL PROJECT",
    title: "Developer Portfolio",
    desc: "A personal portfolio designed to present my development work, technical skills and professional profile.",
    image: "/portfolio.png",

    features: [
      "Responsive portfolio",
      "Project showcase",
      "Animated interactions",
      "Resume integration",
    ],

    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "GSAP", icon: <SiGsap /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],

    liveLink: "https://princemauryainfo.netlify.app",
    codeLink: "https://github.com/alphatech774623/pkportfolio",
    showCode: true,
  },

  {
    id: "apnaghar",
    number: "05",
    type: "MERN APPLICATION",
    title: "Apna Ghar",
    desc: "A real-estate platform concept for discovering and managing apartment properties through a modern web interface.",
    image: "/apnaghar.png",

    features: [
      "Property discovery",
      "MERN architecture",
      "Cloudinary image handling",
      "Responsive UI",
    ],

    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Cloudinary", icon: <SiCloudinary /> },
    ],

    liveLink: "https://apna-ghar-six.vercel.app",
    codeLink: "https://github.com/alphatech774623/Apna-Ghar",
    showCode: true,
  },
];

function ProjectTech({ tech }) {
  return (
    <div className="project-tech-list">
      {tech.map((item) => (
        <span className="project-tech" key={item.name}>
          {item.icon}
          {item.name}
        </span>
      ))}
    </div>
  );
}

function ProjectActions({ project, onPrivate }) {
  return (
    <div className="project-actions">
      {project.liveLink && (
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-primary-button"
        >
          Live Project
          <FaExternalLinkAlt />
        </a>
      )}

      {project.showCode && project.codeLink ? (
        <a
          href={project.codeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="project-secondary-button"
        >
          <FaGithub />
          Source Code
        </a>
      ) : (
        <button
          type="button"
          className="project-secondary-button"
          onClick={onPrivate}
        >
          <FaLock />
          Private Code
        </button>
      )}
    </div>
  );
}

export default function Projects() {
  const pageRef = useRef(null);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".projects-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".projects-title",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".projects-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.35"
        )
        .from(
          ".featured-project",
          {
            y: 45,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        );

      gsap.from(".project-grid-card", {
        y: 45,
        opacity: 0,
        duration: 0.65,
        stagger: 0.12,
        delay: 0.55,
        ease: "power3.out",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const showPrivateMessage = () => {
    setToast({
      show: true,
      message:
        "The source code for this project is private at the moment.",
      type: "error",
    });
  };

  return (
    <main className="projects-page" ref={pageRef}>
      {/* BACKGROUND */}
      <div className="projects-background-grid"></div>

      <div className="projects-glow projects-glow-one"></div>
      <div className="projects-glow projects-glow-two"></div>

      {toast.show && (
        <Toast
          message={toast.message}
          type={toast.type}
          onClose={() =>
            setToast({
              show: false,
              message: "",
              type: "",
            })
          }
        />
      )}

      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="projects-header">
        <div className="container">
          <div className="projects-eyebrow">
            <span></span>
            SELECTED WORK
          </div>

          <h1 className="projects-title">
            Things I've
            <span>built.</span>
          </h1>

          <p className="projects-description">
            A selection of web applications, digital products and platforms
            I've worked on — from frontend experiences to full-stack systems.
          </p>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECT
      ====================================================== */}

      <section className="featured-project-section">
        <div className="container">
          <div className="featured-project">
            {/* IMAGE */}
            <div className="featured-project-image">
              <img
                src={projects[0].image}
                alt={projects[0].title}
              />

              <div className="featured-project-overlay">
                <span>FEATURED PROJECT</span>
              </div>

              <div className="featured-project-number">
                {projects[0].number}
              </div>
            </div>

            {/* CONTENT */}
            <div className="featured-project-content">
              <div className="project-type">
                {projects[0].type}
              </div>

              <h2>{projects[0].title}</h2>

              <p className="featured-short-description">
                {projects[0].desc}
              </p>

              <p className="featured-overview">
                {projects[0].overview}
              </p>

              <div className="featured-features">
                {projects[0].features.map((feature) => (
                  <div key={feature}>
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <ProjectTech tech={projects[0].tech} />

              <ProjectActions
                project={projects[0]}
                onPrivate={showPrivateMessage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          OTHER PROJECTS
      ====================================================== */}

      <section className="other-projects-section">
        <div className="container">
          <div className="projects-section-heading">
            <div>
              <div className="section-label-projects">
                MORE PROJECTS
              </div>

              <h2>
                Other work & <span>experiments.</span>
              </h2>
            </div>

            <p>
              Different projects I've built while exploring frontend,
              backend, CMS and full-stack development.
            </p>
          </div>

          <div className="row g-4 mt-2">
            {projects.slice(1).map((project) => (
              <div
                className="col-md-6 col-xl-4 project-grid-card"
                key={project.id}
              >
                <article className="project-card">
                  {/* IMAGE */}
                  <div className="project-card-image">
                    <img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />

                    <div className="project-card-number">
                      {project.number}
                    </div>

                    <div className="project-card-image-overlay">
                      <FaArrowRight />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="project-card-content">
                    <div className="project-type">
                      {project.type}
                    </div>

                    <h3>{project.title}</h3>

                    <p>{project.desc}</p>

                    <div className="small-feature-list">
                      {project.features.slice(0, 3).map((feature) => (
                        <span key={feature}>
                          <FaCheckCircle />
                          {feature}
                        </span>
                      ))}
                    </div>

                    <ProjectTech tech={project.tech} />

                    <ProjectActions
                      project={project}
                      onPrivate={showPrivateMessage}
                    />
                  </div>
                </article>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          PROJECT PHILOSOPHY
      ====================================================== */}

      <section className="project-philosophy-section">
        <div className="container">
          <div className="project-philosophy">
            <div className="philosophy-icon">
              <FaCode />
            </div>

            <div>
              <div className="section-label-projects">
                HOW I APPROACH PROJECTS
              </div>

              <h2>
                Build with purpose,
                <span>not just pixels.</span>
              </h2>

              <p>
                I focus on understanding the problem first, then designing
                the interface, application architecture and backend workflow
                around it. The goal is to build software that is useful,
                maintainable and ready to grow.
              </p>
            </div>

            <Link to="/contact" className="philosophy-link">
              Start a conversation
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}