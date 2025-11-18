import React from 'react';

function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '1rem', background: '#eee' }}>
      <p>© {new Date().getFullYear()} Jesse Ifrah. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
