import { useEffect, useRef, useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaArrowRight,
  FaPaperPlane,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaClock,
  FaBolt,
} from "react-icons/fa";

import gsap from "gsap";

import Toast from "../Components/Toast";


export default function Contact() {
  const pageRef = useRef(null);
  const leftRef = useRef(null);
  const formRef = useRef(null);

  const [toast, setToast] = useState({
    show: false,
    message: "",
    type: "",
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    purpose: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  /*
   * n8n webhook
   *
   * .env
   * VITE_CONTACT_WEBHOOK_URL=your-n8n-webhook-url
   */
  const webhookUrl = import.meta.env.VITE_CONTACT_WEBHOOK_URL;

  /* =========================================================
     ANIMATION
  ========================================================= */

  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".contact-eyebrow", {
          y: 20,
          opacity: 0,
          duration: 0.5,
        })
        .from(
          ".contact-title",
          {
            y: 35,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.2"
        )
        .from(
          ".contact-description",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
          },
          "-=0.35"
        )
        .from(
          leftRef.current,
          {
            x: -50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.2"
        )
        .from(
          formRef.current,
          {
            x: 50,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.7"
        )
        .from(
          ".contact-social",
          {
            y: 25,
            opacity: 0,
            scale: 0.9,
            stagger: 0.08,
            duration: 0.4,
          },
          "-=0.5"
        );

      gsap.to(".contact-avatar", {
        y: -12,
        duration: 2.4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".contact-orbit", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  /* =========================================================
     INPUT HANDLER
  ========================================================= */

  const handleInput = (field) => (event) => {
    const value = event.target.value;

    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    validateField(field, value);
  };

  /* =========================================================
     VALIDATION
  ========================================================= */

  const validateField = (field, value) => {
    let error = "";

    switch (field) {
      case "name":
        if (!value.trim()) {
          error = "Name is required";
        } else if (value.trim().length < 3) {
          error = "Minimum 3 characters required";
        }
        break;

      case "email":
        if (!value.trim()) {
          error = "Email is required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
            value
          )
        ) {
          error = "Enter a valid email address";
        }
        break;

      case "mobile":
        if (!value.trim()) {
          error = "Mobile number is required";
        } else if (!/^[0-9+\-\s()]{10,15}$/.test(value)) {
          error = "Enter a valid mobile number";
        }
        break;

      case "purpose":
        if (!value) {
          error = "Please select a purpose";
        }
        break;

      case "message":
        if (!value.trim()) {
          error = "Message is required";
        } else if (value.trim().length < 10) {
          error = "Minimum 10 characters required";
        }
        break;

      default:
        break;
    }

    setErrors((prev) => ({
      ...prev,
      [field]: error,
    }));

    return error;
  };

  const validateForm = () => {
    const fields = Object.keys(formData);

    const newErrors = {};

    fields.forEach((field) => {
      const error = validateField(field, formData[field]);

      if (error) {
        newErrors[field] = error;
      }
    });

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  /* =========================================================
     SUBMIT
  ========================================================= */

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      setToast({
        show: true,
        message: "Please fix the highlighted fields.",
        type: "error",
      });

      return;
    }

    if (!webhookUrl) {
      setToast({
        show: true,
        message: "Contact service is not configured yet.",
        type: "error",
      });

      return;
    }

    try {
      setLoading(true);

      const response = await fetch(webhookUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          source: "Portfolio Contact Form",
          submittedAt: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit form");
      }

      /* SUCCESS */

      setSubmitted(true);

      setToast({
        show: true,
        message:
          "Message received successfully. I'll contact you shortly!",
        type: "success",
      });

      setFormData({
        name: "",
        email: "",
        mobile: "",
        purpose: "",
        message: "",
      });

      setErrors({});

      /* Return form after a short success state */

      setTimeout(() => {
        setSubmitted(false);
      }, 3500);
    } catch (error) {
      console.error(error);

      setToast({
        show: true,
        message:
          "Unable to send your message. Please try again.",
        type: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  /* =========================================================
     CONTACT LINKS
  ========================================================= */

  const email = "princemaurya529@gmail.com";

  const mailLink =
    `mailto:${email}` +
    `?subject=${encodeURIComponent(
      "Project / Collaboration Enquiry"
    )}` +
    `&body=${encodeURIComponent(
      "Hi Prince, I saw your portfolio and would like to discuss something with you."
    )}`;

  const socials = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      link: "https://github.com/alphatech774623",
      className: "github",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      link: "https://linkedin.com/in/prince-maurya-7826a7324",
      className: "linkedin",
    },
    {
      name: "WhatsApp",
      icon: <FaWhatsapp />,
      link: "https://wa.me/918840039506",
      className: "whatsapp",
    },
    {
      name: "Email",
      icon: <FaEnvelope />,
      link: mailLink,
      className: "email",
    },
  ];

  return (
    <main className="contact-page" ref={pageRef}>
      {/* =====================================================
          BACKGROUND
      ====================================================== */}

      <div className="contact-grid-background"></div>

      <div className="contact-glow contact-glow-one"></div>

      <div className="contact-glow contact-glow-two"></div>

      {/* =====================================================
          TOAST
      ====================================================== */}

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

      <section className="contact-header">
        <div className="container">
          <div className="contact-eyebrow">
            <span></span>
            LET'S CONNECT
          </div>

          <h1 className="contact-title">
            Let's build
            <span>something.</span>
          </h1>

          <p className="contact-description">
            Have an idea, project or collaboration in mind?
            Tell me about it. I'll get back to you as soon as
            possible.
          </p>
        </div>
      </section>

      {/* =====================================================
          MAIN CONTACT AREA
      ====================================================== */}

      <section className="contact-main-section">
        <div className="container">
          <div className="contact-layout">

            {/* =================================================
                LEFT SIDE
            ================================================== */}

            <div
              className="contact-intro"
              ref={leftRef}
            >
              <div className="contact-availability">
                <span></span>
                AVAILABLE FOR NEW PROJECTS
              </div>

              <h2>
                Let's turn your
                <span>idea into reality.</span>
              </h2>

              <p>
                Whether you need a website, full-stack application,
                technical collaboration or simply want to discuss
                an idea, feel free to reach out.
              </p>

              {/* AVATAR */}

              <div className="contact-visual">
                <div className="contact-orbit"></div>

                <div className="contact-avatar-glow"></div>

                <img
                  src="/conatact.svg"
                  alt="Contact"
                  className="contact-avatar"
                />

                <div className="contact-floating-card contact-floating-card-one">
                  <FaBolt />
                  <span>Fast Response</span>
                </div>

                <div className="contact-floating-card contact-floating-card-two">
                  <FaCodeIcon />
                  <span>Let's Build</span>
                </div>
              </div>

              {/* QUICK INFO */}

              <div className="contact-info-list">

                <div className="contact-info-item">
                  <div className="contact-info-icon location">
                    <FaMapMarkerAlt />
                  </div>

                  <div>
                    <span>LOCATION</span>
                    <strong>Varanasi, India</strong>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon email">
                    <FaEnvelope />
                  </div>

                  <div>
                    <span>EMAIL</span>
                    <strong>{email}</strong>
                  </div>
                </div>

                <div className="contact-info-item">
                  <div className="contact-info-icon time">
                    <FaClock />
                  </div>

                  <div>
                    <span>RESPONSE TIME</span>
                    <strong>Usually within 24 hours</strong>
                  </div>
                </div>

              </div>

              {/* SOCIALS */}

              <div className="contact-socials">
                {socials.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                    className={`contact-social ${item.className}`}
                  >
                    {item.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* =================================================
                FORM
            ================================================== */}

            <div
              className="contact-form-wrapper"
              ref={formRef}
            >
              {!submitted ? (
                <form
                  className="contact-form"
                  onSubmit={handleSubmit}
                >
                  <div className="contact-form-header">
                    <div>
                      <span>START A CONVERSATION</span>

                      <h2>
                        Tell me about
                        <strong>your project.</strong>
                      </h2>
                    </div>

                    <div className="contact-form-icon">
                      <FaPaperPlane />
                    </div>
                  </div>

                  {/* NAME */}

                  <div className="contact-form-field">
                    <label htmlFor="name">
                      Your Name
                    </label>

                    <input
                      id="name"
                      type="text"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={handleInput("name")}
                      className={errors.name ? "has-error" : ""}
                    />

                    {errors.name && (
                      <small>{errors.name}</small>
                    )}
                  </div>

                  {/* EMAIL + MOBILE */}

                  <div className="contact-form-row">

                    <div className="contact-form-field">
                      <label htmlFor="email">
                        Email Address
                      </label>

                      <input
                        id="email"
                        type="email"
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleInput("email")}
                        className={
                          errors.email ? "has-error" : ""
                        }
                      />

                      {errors.email && (
                        <small>{errors.email}</small>
                      )}
                    </div>

                    <div className="contact-form-field">
                      <label htmlFor="mobile">
                        Mobile Number
                      </label>

                      <input
                        id="mobile"
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.mobile}
                        onChange={handleInput("mobile")}
                        className={
                          errors.mobile ? "has-error" : ""
                        }
                      />

                      {errors.mobile && (
                        <small>{errors.mobile}</small>
                      )}
                    </div>

                  </div>

                  {/* PURPOSE */}

                  <div className="contact-form-field">
                    <label htmlFor="purpose">
                      Purpose of contacting me
                    </label>

                    <select
                      id="purpose"
                      value={formData.purpose}
                      onChange={handleInput("purpose")}
                      className={
                        errors.purpose ? "has-error" : ""
                      }
                    >
                      <option value="">
                        Select a purpose
                      </option>

                      <option value="Enquiry">
                        Enquiry
                      </option>

                      <option value="Collaboration">
                        Collaboration
                      </option>

                      <option value="Website Development">
                        Website Development
                      </option>

                      <option value="Others">
                        Others
                      </option>
                    </select>

                    {errors.purpose && (
                      <small>{errors.purpose}</small>
                    )}
                  </div>

                  {/* MESSAGE */}

                  <div className="contact-form-field">
                    <label htmlFor="message">
                      Your Message
                    </label>

                    <textarea
                      id="message"
                      rows="6"
                      placeholder="Tell me a little about what you have in mind..."
                      value={formData.message}
                      onChange={handleInput("message")}
                      className={
                        errors.message ? "has-error" : ""
                      }
                    />

                    {errors.message && (
                      <small>{errors.message}</small>
                    )}
                  </div>

                  {/* SUBMIT */}

                  <button
                    type="submit"
                    className="contact-submit-button"
                    disabled={loading}
                  >
                    {loading ? (
                      <>
                        <span className="contact-spinner"></span>
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <FaArrowRight />
                      </>
                    )}
                  </button>

                  <div className="contact-form-note">
                    <FaCheckCircle />
                    <span>
                      Your information is only used to respond
                      to your enquiry.
                    </span>
                  </div>
                </form>
              ) : (
                /* =================================================
                   SUCCESS STATE
                ================================================== */

                <div className="contact-success">
                  <div className="contact-success-icon">
                    <FaCheckCircle />
                  </div>

                  <span>MESSAGE RECEIVED</span>

                  <h2>
                    Thank you for
                    <strong>reaching out!</strong>
                  </h2>

                  <p>
                    I've successfully received your message.
                    I'll review it and get back to you shortly.
                  </p>

                  <div className="contact-success-line"></div>

                  <small>
                    Your message has been securely submitted.
                  </small>
                </div>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          BOTTOM CTA
      ====================================================== */}

      <section className="contact-bottom-section">
        <div className="container">
          <div className="contact-bottom-card">
            <div>
              <span>NOT SURE WHERE TO START?</span>

              <h2>
                Just say
                <strong>hello.</strong>
              </h2>
            </div>

            <a
              href={mailLink}
              className="contact-bottom-button"
            >
              <FaEnvelope />
              Email Me
              <FaArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

/*
 * Small helper icon.
 * Keeping it here avoids adding another dependency
 * just for one decorative icon.
 */
function FaCodeIcon() {
  return <FaPaperPlane />;
}