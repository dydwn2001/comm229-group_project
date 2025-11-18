import React from 'react';
import webIcon from '../assets/web-icon.webp';
import mobileIcon from '../assets/mobile-icon.webp';

function Services() {
  const services = [
    { icon: webIcon, title: 'Web Development' },
    { icon: mobileIcon, title: 'Mobile Apps' },
  ];

  return (
    <section className="services-page">
      <h1>Services</h1>
      <div className="services-list">
        {services.map((s, i) => (
          <div key={i} className="service-item">
            <img src={s.icon} alt={s.title} width="50" />
            <h2>{s.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
