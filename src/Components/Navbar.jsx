import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaDownload,
  FaHome,
  FaBriefcase,
  FaCode,
  FaGraduationCap,
  FaEnvelope,
} from "react-icons/fa";

const navItems = [
  {
    label: "Home",
    path: "/",
    icon: <FaHome />,
  },
  {
    label: "Projects",
    path: "/projects",
    icon: <FaBriefcase />,
  },
  {
    label: "Skills",
    path: "/skills",
    icon: <FaCode />,
  },
  {
    label: "Education",
    path: "/education",
    icon: <FaGraduationCap />,
  },
  {
    label: "Contact",
    path: "/contact",
    icon: <FaEnvelope />,
  },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add navbar effect when page is scrolled
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Prevent body scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`portfolio-navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <div className="container">
          <nav className="navbar navbar-expand-lg p-0">
            
            {/* BRAND */}
            <NavLink
              to="/"
              className="navbar-brand portfolio-brand"
              onClick={closeMenu}
            >
              <span className="brand-mark">P</span>

              <span className="brand-info">
                <span className="brand-name">Prince Maurya</span>
                <span className="brand-role">Full Stack Developer</span>
              </span>
            </NavLink>

            {/* MOBILE TOGGLE */}
            <button
              type="button"
              className={`navbar-toggler navbar-menu-button ${
                menuOpen ? "menu-active" : ""
              }`}
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </button>

            {/* NAVIGATION */}
            <div
              className={`portfolio-nav-collapse ${
                menuOpen ? "nav-open" : ""
              }`}
            >
              <ul className="navbar-nav align-items-lg-center ms-auto">
                {navItems.map((item) => (
                  <li className="nav-item" key={item.path}>
                    <NavLink
                      to={item.path}
                      end={item.path === "/"}
                      className={({ isActive }) =>
                        `portfolio-nav-link ${
                          isActive ? "active" : ""
                        }`
                      }
                      onClick={closeMenu}
                    >
                      <span className="nav-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </NavLink>
                  </li>
                ))}

                {/* MOBILE MENU ACTIONS */}
                <li className="nav-item mobile-menu-actions">
                  <a
                    href="/princeResume.pdf"
                    download
                    className="resume-button"
                    onClick={closeMenu}
                  >
                    <FaDownload />
                    <span>Download Resume</span>
                  </a>

                  <a
                    href="https://github.com/alphatech774623"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-button"
                    aria-label="GitHub Profile"
                  >
                    <FaGithub />
                  </a>
                </li>
              </ul>
            </div>

            {/* DESKTOP ACTIONS */}
            <div className="navbar-actions d-none d-lg-flex">
              <a
                href="https://github.com/alphatech774623"
                target="_blank"
                rel="noopener noreferrer"
                className="github-button"
                aria-label="GitHub Profile"
              >
                <FaGithub />
              </a>

              <a
                href="/princeResume.pdf"
                download
                className="resume-button"
              >
                <FaDownload />
                <span>Resume</span>
              </a>
            </div>
          </nav>
        </div>
      </header>

      {/* MOBILE BACKDROP */}
      {menuOpen && (
        <div
          className="navbar-backdrop"
          onClick={closeMenu}
          aria-hidden="true"
        />
      )}
    </>
  );
}

export default Navbar;