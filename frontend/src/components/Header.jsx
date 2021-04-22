import React from 'react';
import '../assets/Header.css';
import profile from '../images/profile.jpeg';

const Header = () => {
  return (
    <div className="header">
      <div className="profile">
        <h2>Kimjunki</h2>
        <img className="profile-img" src={profile} alt="Profile" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="/#" className="test">
              Introduce
            </a>
          </li>
          <li>
            <a href="/#">Skils</a>
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
