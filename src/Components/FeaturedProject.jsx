import { FaCheckCircle } from "react-icons/fa";
import ProjectTech from "./ProjectTech";
import ProjectActions from "./ProjectActions";

export default function FeaturedProject({
  project,
  onPrivate,
  badge = "FEATURED PROJECT",
}) {
  if (!project) return null;

  return (
    <section className="featured-project-section">
      <div className="container">
        <div className="featured-project">

          {/* IMAGE */}
          <div className="featured-project-image">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
            />

            <div className="featured-project-overlay">
              <span>{badge}</span>
            </div>

            {project.number && (
              <div className="featured-project-number">
                {project.number}
              </div>
            )}
          </div>

          {/* CONTENT */}
          <div className="featured-project-content">

            {project.type && (
              <div className="project-type">
                {project.type}
              </div>
            )}

            <h2>{project.title}</h2>

            {project.desc && (
              <p className="featured-short-description">
                {project.desc}
              </p>
            )}

            {project.overview && (
              <p className="featured-overview">
                {project.overview}
              </p>
            )}

            {/* FEATURES */}
            {project.features?.length > 0 && (
              <div className="featured-features">
                {project.features.map((feature) => (
                  <div key={feature}>
                    <FaCheckCircle />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            {/* TECHNOLOGIES */}
            {project.tech?.length > 0 && (
              <ProjectTech tech={project.tech} />
            )}

            {/* ACTIONS */}
            <ProjectActions
              project={project}
              onPrivate={onPrivate}
            />

          </div>
        </div>
      </div>
    </section>
  );
}