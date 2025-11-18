import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <section style={{ padding: '2rem' }}>
      <h1>Welcome to Jesse Ifrah’s Portfolio</h1>
      <p>I love sports and spending time with my daughter. I build responsive web apps that solve problems and look good.</p>
      <Link to="/about" className="btn">Learn More About Me</Link>
    </section>
  );
}

export default Home;



