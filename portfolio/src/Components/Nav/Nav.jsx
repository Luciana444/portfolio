import React, { useState } from "react";
import './Nav.css';
import github from '../../Images/logo-github.png';
import instagram from '../../Images/🦆 icon _logo instagram_.png';

const Nav = () => {
  const [selected, setSelected] = useState(null);

  const handleClick = (sectionId) => {
    setSelected(sectionId);
  };

  return (
    <>
      <div className="nav_containt">
        <div className="nav_name">
          <h2 className="title">Luciana Zabaleta</h2>
          <h3 className="training">Developer</h3>
        </div>
        <div className="nav">
          <ul>
            <li>
              <a 
                href="#projects" 
                className={selected === 'projects' ? 'active' : ''} 
                onClick={() => handleClick('projects')}
              >
                <div className="line"></div>Projects
              </a>
            </li>
            <li>
              <a 
                href="#technologies" 
                className={selected === 'technologies' ? 'active' : ''} 
                onClick={() => handleClick('technologies')}
              >
                <div className="line"></div>Technologies
              </a>
            </li>
            <li>
              <a 
                href="#about_me" 
                className={selected === 'about_me' ? 'active' : ''} 
                onClick={() => handleClick('about_me')}
              >
                <div className="line"></div>About me
              </a>
            </li>
          </ul>
        </div>
        <div className="social_media">
          <div className="github">
            <img src={github} alt="GitHub" />
          </div>
          <div className="instagram">
            <img src={instagram} alt="Instagram" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;