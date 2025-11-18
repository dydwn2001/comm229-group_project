// src/pages/Projects.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import projects from '../data/projects';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      {projects.map(({ id, title, description, preview: Preview, route }) => (
        <div key={id} className="project-card">
          <div className="project-preview">
            <Preview />
          </div>
          <h3 className="project-title">{title}</h3>
          <p className="project-desc">{description}</p>
          <Link to={route} className="project-button">
            View Project
          </Link>
        </div>
      ))}
    </div>
  );
}

export default Projects;