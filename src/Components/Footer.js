import React from 'react'

const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="footer-container">

        {/* Brand */}
        <div className="footer-col brand">
          <h2>VRT Management Group</h2>
          <p>
            Empowering entrepreneur-led companies to scale with systems,
            leadership, and disciplined execution.
          </p>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3>Services</h3>
          <ul>
            <li>Business Strategy</li>
            <li>Leadership Development</li>
            <li>Growth Systems</li>
            <li>Execution Planning</li>
          </ul>
        </div>

        {/* Company */}
        <div className="footer-col">
          <h3>Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Insights</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>Email: coachrajesh@vrt9.com</p>
          <p>Phone: +1-203-304-1918</p>

          <div className="socials">
            <i className="bi bi-linkedin"></i>
            <i className="bi bi-twitter"></i>
            <i className="bi bi-facebook"></i>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 VRT Management Group. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;