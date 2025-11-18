// src/pages/Project3.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Project3.css';

function Project3() {
  return (
    <div className="project-wrapper">
      <h2>Portfolio Site</h2>
      <p>This site is built with React and React Router. It features:</p>
      <ul>
        <li>Responsive Navigation Bar</li>
        <li>Dynamic Projects Gallery</li>
        <li>Interactive Contact Form</li>
        <li>Custom Logo & Styling</li>
      </ul>
      <Link to="/" className="button">
        Back to Home
      </Link>
    </div>
  );
}

export default Project3;
