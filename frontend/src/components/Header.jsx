import React from 'react';
import '../assets/Header.css';

const Header = () => {
  return (
    <header>
      <div className="container">
        <h2>Kimjunki</h2>
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
    </header>
  );
};

export default Header;
