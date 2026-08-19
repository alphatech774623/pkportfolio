import {
  FaExternalLinkAlt,
  FaGithub,
  FaLock,
} from "react-icons/fa";

export default function ProjectActions({
  project,
  onPrivate,
}) {
  return (
    <div className="project-actions">

      {/* LIVE PROJECT */}
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

      {/* SOURCE CODE */}
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