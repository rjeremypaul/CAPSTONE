import React from 'react';
import './FirstNavbar.css';

const FirstNavbar = ({ toggleLoginForm, toggleRegisterForm }) => {
  return (
    <nav className="navbar">
      <div className="nav-title">iReserba</div>
      <div className="navbar-links-left">
        <ul className="navbar-links-no1">
          <li><a href="#">About us</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Contact us</a></li>
          <li><a href="#">Facilities</a></li>
        </ul>
      </div>
      <div className="navbar-links-right">
        <ul className="navbar-links-no2">
          <li><a href="#" onClick={toggleLoginForm}>Sign in</a></li>
          <li><a href="#" onClick={toggleRegisterForm}>Sign up</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default FirstNavbar;
