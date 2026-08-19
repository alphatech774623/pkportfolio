import React from "react";

export default function ProjectTech({ tech = [] }) {
  if (!tech.length) return null;

  return (
    <div className="project-tech-list">
      {tech.map((item, index) => (
        <span
          className="project-tech"
          key={`${item.name}-${index}`}
        >
          {item.icon && (
            <span className="project-tech-icon">
              {item.icon}
            </span>
          )}

          <span className="project-tech-name">
            {item.name}
          </span>
        </span>
      ))}
    </div>
  );
}