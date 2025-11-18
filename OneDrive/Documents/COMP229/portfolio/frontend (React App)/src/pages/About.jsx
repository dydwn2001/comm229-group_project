import React from 'react';
import profilePic from '../assets/profilepic.jpg';
import resume from '../assets/resume.pdf';

function About() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>About Me</h1>
      <img src={profilePic} alt="Jesse Ifrah" style={{ width: 200, borderRadius: 8 }} />
      <p>I’m passionate about web development, sports, and fatherhood. I strive to build clean, accessible applications that make life easier.</p>
      <a href={resume} target="_blank" rel="noopener noreferrer">Download Resume</a>
    </section>
  );
}

export default About;
