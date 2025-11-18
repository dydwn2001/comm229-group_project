// src/pages/Contact.jsx
/**
 * File: Contact.jsx
 * Student: Jesse ifrah
 * Student ID: 301494502
 * Date: 2025-09-23
 */

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Contact.css';

function Contact() {
  // SECTION: State Hooks for Form Fields
  const [firstName, setFirstName] = useState('');
  const [lastName,  setLastName]  = useState('');
  const [email,     setEmail]     = useState('');
  const [phone,     setPhone]     = useState('');
  const [message,   setMessage]   = useState('');

  const navigate = useNavigate();

  // SECTION: Form Submission Handler
  const handleSubmit = (e) => {
    e.preventDefault();

    // For now, we just log form data
    console.log({
      firstName,
      lastName,
      email,
      phone,
      message
    });

    // Redirect back to Home page
    navigate('/');
  };

  return (
    <div className="contact-page">
      {/* SECTION: Contact Info Panel */}
      <aside className="contact-info">
        <h2>Contact Information</h2>
        <p><strong>Email:</strong> jesseifrah08@gmail.com</p>
        <p><strong>Phone:</strong> (647) 553-6494</p>
        <p><strong>Location:</strong> Vaughan, ON, Canada</p>
      </aside>

      {/* SECTION: Contact Form */}
      <section className="contact-form-wrapper">
        <h2>Send Me a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="firstName">First Name</label>
            <input
              id="firstName"
              type="text"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="lastName">Last Name</label>
            <input
              id="lastName"
              type="text"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="form-row">
            <label htmlFor="phone">Contact Number</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              rows="4"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="submit-button">
            Send Message
          </button>
        </form>
      </section>
    </div>
  );
}

export default Contact;
