import React from 'react';

function Footer() {
  return (
    <footer>
      <div className="contact">
        <h4>Contact Us</h4>
        <p>abcd company</p>
        <p>newyork,hometown</p>
        <p>Phone: 111-555-5555</p>
        <p>Email: info@company.com</p>
      </div>
      <div className="social">
        <h4>Connect With Us</h4>
        <ul>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Instagram</a></li>
        </ul>
       <hr></hr>
      </div>
    </footer>
  );
}

export default Footer;