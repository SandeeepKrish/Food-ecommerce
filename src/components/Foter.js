import React from 'react';
import './style.css';

const Foter = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>Contact Us</p>
        <p>Feel free to reach out</p>
        <div className="footer-links">
          <div className="footer-link">
            <i className="fa-solid fa-envelope"></i> <a href="mailto:2022d1r020@mietjammu.in"> 2022d1r020@mietjammu.in</a>
          </div>
          <div className="footer-link">
            <i className="fa-brands fa-linkedin"></i> <a href="https://linkedin.com/sandeep">Linkedin.com/sandeep</a>
          </div>
          <div className="footer-link">
            <i className="fa-brands fa-github"></i> <a href="https://github.com/sandeep">github.com/sandeep</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Foter;
