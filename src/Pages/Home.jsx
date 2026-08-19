import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import {
  FaArrowRight,
  FaDownload,
  FaGithub,
  FaLinkedinIn,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaCloud,
  FaCode,
  FaServer,
  FaRocket,
  FaLayerGroup,
  FaCheckCircle,
  FaExternalLinkAlt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiBootstrap,
  SiGooglecloud,
  SiN8N,
  SiOpenai,
} from "react-icons/si";
import { projects } from "../utils/projects";
import FeaturedProject from "../Components/FeaturedProject";

function Home() {
  const heroRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      tl.from(".hero-eyebrow", {
        y: 25,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          ".hero-title-line",
          {
            y: 45,
            opacity: 0,
            duration: 0.8,
            stagger: 0.12,
          },
          "-=0.25"
        )
        .from(
          ".hero-description",
          {
            y: 25,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          ".hero-actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.3"
        )
        .from(
          ".hero-social",
          {
            y: 15,
            opacity: 0,
            duration: 0.4,
          },
          "-=0.2"
        )
        .from(
          imageRef.current,
          {
            scale: 0.9,
            opacity: 0,
            x: 35,
            duration: 1,
          },
          "-=0.8"
        );

      gsap.to(".profile-float", {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.utils.toArray(".reveal-item").forEach((element) => {
        gsap.from(element, {
          scrollTrigger: false,
          y: 35,
          opacity: 0,
          duration: 0.7,
          ease: "power3.out",
          delay: 0.1,
        });
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <main className="home-page" ref={heroRef}>
      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="hero-section">
        <div className="hero-grid"></div>

        <div className="hero-glow hero-glow-one"></div>
        <div className="hero-glow hero-glow-two"></div>

        <div className="container">
          <div className="row align-items-center g-5">
            {/* LEFT CONTENT */}
            <div className="col-lg-7">
              <div ref={contentRef}>
                <div className="hero-eyebrow">
                  <span className="status-dot"></span>

                  <span>Available for opportunities</span>
                </div>

                <h1 className="hero-title">
                  <span className="hero-title-line d-block">
                    Building digital
                  </span>

                  <span className="hero-title-line d-block">
                    products that
                  </span>

                  <span className="hero-title-line d-block hero-highlight">
                    solve real problems.
                  </span>
                </h1>

                <p className="hero-description">
                  Hi, I'm <strong>Prince Maurya</strong> — a Full Stack
                  Developer focused on building modern web applications,
                  scalable backend systems and practical digital products
                  using the MERN stack.
                </p>

                <div className="hero-actions d-flex flex-wrap gap-3">
                  <Link to="/projects" className="primary-action">
                    View My Work
                    <FaArrowRight />
                  </Link>

                  <a
                    href="/princeResume.pdf"
                    download
                    className="secondary-action"
                  >
                    <FaDownload />
                    Download Resume
                  </a>
                </div>

                <div className="hero-social">
                  <span className="social-label">Find me on</span>

                  <a
                    href="https://github.com/alphatech774623"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                  >
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            </div>

            {/* RIGHT PROFILE */}
            <div className="col-lg-5">
              <div
                ref={imageRef}
                className="hero-visual d-flex justify-content-center"
              >
                <div className="profile-float">
                  <div className="profile-orbit orbit-one"></div>
                  <div className="profile-orbit orbit-two"></div>

                  <div className="profile-card">
                    <div className="profile-image-wrapper">
                      <img
                        src="/profilePic.png"
                        alt="Prince Maurya - Full Stack Developer"
                        className="profile-image"
                      />

                      <div className="profile-verified">
                        <FaCheckCircle />
                      </div>
                    </div>

                    <div className="profile-card-content">
                      <span className="profile-role">
                        FULL STACK DEVELOPER
                      </span>

                      <h2>Prince Maurya</h2>

                      <p>
                        React · Node.js · MongoDB · Cloud
                      </p>
                    </div>
                  </div>

                  {/* Floating technology cards */}

                 <div className="floating-tech tech-react">
                    <FaReact />
                    <span>React</span>
                  </div>

                   <div className="floating-tech tech-node">
                    <FaNodeJs />
                    <span>Node.js</span>
                  </div>

                  <div className="floating-tech tech-mongo">
                    <SiMongodb />
                    <span>MongoDB</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SCROLL INDICATOR */}
          <div className="hero-scroll">
            <span></span>
            <small>Scroll to explore</small>
          </div>
        </div>
      </section>

      {/* =====================================================
          QUICK STATS
      ====================================================== */}

      <section className="stats-section">
        <div className="container">
          <div className="stats-wrapper">
            <div className="stat-item">
              <strong>4+</strong>
              <span>Real Projects</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>MERN</strong>
              <span>Primary Stack</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>Full Stack</strong>
              <span>Development Focus</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <strong>Cloud</strong>
              <span>Deployment Experience</span>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="about-section section-padding">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5">
              <div className="section-label">ABOUT ME</div>

              <h2 className="section-title">
                I don't just write code.
                <span>I build products.</span>
              </h2>
            </div>

            <div className="col-lg-7">
              <div className="about-content">
                <p>
                  I'm a Computer Science student and Full Stack Developer
                  who enjoys turning ideas into functional, production-style
                  web applications.
                </p>

                <p>
                  My primary development stack is{" "}
                  <strong>MongoDB, Express.js, React and Node.js</strong>.
                  I work across the complete application lifecycle —
                  from designing interfaces and REST APIs to authentication,
                  databases, cloud services and deployment.
                </p>

                <p>
                  Alongside development, I'm also working on{" "}
                  <strong>Fixkar</strong>, a real-world service marketplace
                  concept designed to connect customers with local
                  professionals.
                </p>

                <Link to="/contact" className="text-link">
                  Let's work together
                  <FaArrowRight />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT I BUILD
      ====================================================== */}

      <section className="capabilities-section section-padding">
        <div className="container">
          <div className="section-heading-row">
            <div>
              <div className="section-label">WHAT I BUILD</div>

              <h2 className="section-title">
                From idea to
                <span>working product.</span>
              </h2>
            </div>

            <p className="section-heading-description">
              I focus on practical development — building interfaces,
              backend systems and complete applications instead of isolated
              UI demos.
            </p>
          </div>

          <div className="row g-4 mt-3">
            <div className="col-md-6 col-lg-3">
              <div className="capability-card">
                <div className="capability-icon">
                  <FaLayerGroup />
                </div>

                <span>01</span>

                <h3>Frontend</h3>

                <p>
                  Responsive and interactive interfaces using React,
                  JavaScript and modern UI principles.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="capability-card">
                <div className="capability-icon">
                  <FaServer />
                </div>

                <span>02</span>

                <h3>Backend</h3>

                <p>
                  REST APIs, authentication, business logic and scalable
                  Node.js backend architecture.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="capability-card">
                <div className="capability-icon">
                  <FaDatabase />
                </div>

                <span>03</span>

                <h3>Database</h3>

                <p>
                  MongoDB data modeling, Mongoose schemas and reliable
                  application data workflows.
                </p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="capability-card">
                <div className="capability-icon">
                  <FaCloud />
                </div>

                <span>04</span>

                <h3>Deployment</h3>

                <p>
                  Cloud services, Git workflows and deployment of full-stack
                  applications.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          FEATURED PROJECT
      ====================================================== */}

       <FeaturedProject
        project={projects[0]}
        onPrivate={() => {}}
      />

      {/* =====================================================
          TECHNOLOGY STACK
      ====================================================== */}

      <section className="stack-section section-padding">
        <div className="container">
          <div className="text-center">
            <div className="section-label">TECHNOLOGY STACK</div>

            <h2 className="section-title centered">
              Tools I use to
              <span>build things.</span>
            </h2>
          </div>

          <div className="tech-grid mt-5">
            <div className="tech-item">
              <FaReact />
              <span>React</span>
            </div>

            <div className="tech-item">
              <SiJavascript />
              <span>JavaScript</span>
            </div>

            <div className="tech-item">
              <FaNodeJs />
              <span>Node.js</span>
            </div>

            <div className="tech-item">
              <SiExpress />
              <span>Express.js</span>
            </div>

            <div className="tech-item">
              <SiMongodb />
              <span>MongoDB</span>
            </div>

            <div className="tech-item">
              <SiBootstrap />
              <span>Bootstrap</span>
            </div>

            <div className="tech-item">
              <SiGooglecloud />
              <span>Google Cloud</span>
            </div>

            <div className="tech-item">
              <FaGithub />
              <span>Git & GitHub</span>
            </div>
            <div className="tech-item">
            <SiN8N />
            <span>n8n Workflows</span>
          </div>

          <div className="tech-item">
            <SiOpenai />
            <span>ChatGPT/Codex</span>
          </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT FOCUS
      ====================================================== */}

      <section className="focus-section section-padding">
        <div className="container">
          <div className="focus-card">
            <div className="row align-items-center g-4">
              <div className="col-lg-7">
                <div className="section-label">CURRENT FOCUS</div>

                <h2>
                  Building, learning and
                  <span>shipping.</span>
                </h2>

                <p>
                  I'm continuously improving my full-stack development
                  skills by working on real applications, understanding
                  system architecture and learning how products are
                  actually built and deployed.
                </p>
              </div>

              <div className="col-lg-5">
                <div className="focus-list">
                  <div>
                    <FaRocket />
                    <span>Building real-world products</span>
                  </div>

                  <div>
                    <FaCode />
                    <span>Improving software architecture</span>
                  </div>

                  <div>
                    <FaServer />
                    <span>Strengthening backend development</span>
                  </div>

                  <div>
                    <FaCloud />
                    <span>Learning deployment & cloud systems</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}

      <section className="home-cta section-padding">
        <div className="container">
          <div className="cta-inner text-center">
            <div className="section-label">LET'S CONNECT</div>

            <h2>
              Have an idea?
              <span>Let's build it.</span>
            </h2>

            <p>
              Whether you're looking for a developer, have a project idea,
              or simply want to connect — I'd be happy to hear from you.
            </p>

            <div className="d-flex justify-content-center flex-wrap gap-3">
              <Link to="/contact" className="primary-action">
                Get In Touch
                <FaArrowRight />
              </Link>

              <a
                href="https://github.com/alphatech774623"
                target="_blank"
                rel="noopener noreferrer"
                className="secondary-action"
              >
                <FaGithub />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;