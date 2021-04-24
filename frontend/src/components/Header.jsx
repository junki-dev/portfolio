import React from 'react';
import '../assets/Header.css';
import profile from '../images/profile.jpeg';

const Header = () => {
  return (
    <div className="header">
      <div className="header-profile">
        <h2 className="header-profile-name">Kimjunki</h2>
        <img className="header-profile-img" src={profile} alt="Profile" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#career" className="test">
              Career
            </a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="/#">Experience</a>
          </li>
          <li>
            <a href="/#">Contact Me</a>
          </li>
        </ul>
      </nav>
      <hr className="contour" />
    </div>
  );
};

export default Header;
