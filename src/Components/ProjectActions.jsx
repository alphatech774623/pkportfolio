import {
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
} from "react-icons/fa";

export default function ProjectActions({
  project,
  onPrivate,
}) {
  const handlePrivate = () => {
    if (typeof onPrivate === "function") {
      onPrivate();
    }
  };

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
          onClick={handlePrivate}
          disabled={!onPrivate}
          aria-label="Source code is private"
        >
          <FaLock />
          Private Code
        </button>
      )}
    </div>
  );
}
