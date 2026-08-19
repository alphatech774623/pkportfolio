import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";

import {
  FaArrowRight,
  FaCode,
  FaCheckCircle,
} from "react-icons/fa";

import Toast from "../Components/Toast";
import FeaturedProject from "../Components/FeaturedProject";
import ProjectTech from "../Components/ProjectTech";
import ProjectActions from "../Components/ProjectActions";
import { projects } from "../utils/projects";

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

      <FeaturedProject
        project={projects[0]}
        onPrivate={showPrivateMessage}
      />

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

                  <div className="project-card-content">
                    <div className="project-type">
                      {project.type}
                    </div>

                    <h3>{project.title}</h3>
                    <p>{project.desc}</p>

                    {project.features?.length > 0 && (
                      <div className="small-feature-list">
                        {project.features.slice(0, 3).map((feature) => (
                          <span key={feature}>
                            <FaCheckCircle />
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

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
