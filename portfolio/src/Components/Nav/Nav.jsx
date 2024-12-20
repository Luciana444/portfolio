import React from "react";
import './Nav.css';
import github from '../../Images/logo-github.png';
import instagram from '../../Images/🦆 icon _logo instagram_.png';
const Nav = () =>{
    return(
        <>
            <div className="nav_containt">
                <div className="nav_name">
                    <h2 className="title">Luciana Zabaleta</h2>
                    <h3 className="training">Developer</h3>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="#projects"><div className="line"></div>Projects</a></li>
                        <li><a href="#technologies"><div className="line"></div>Technologies</a></li>
                        <li><a href="#about_me"><div className="line"></div>About me</a></li>
                    </ul>
                </div>
                <div className="social_media">
                    <div className="github">
                        <img src={github}/>
                    </div>
                    <div className="instagram">
                        <img  src={instagram}/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav