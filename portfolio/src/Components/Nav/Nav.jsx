import React from "react";
import './Nav.css';
const Nav = () =>{
    return(
        <>
            <div className="nav_containt">
                <div className="nav_name">
                    <h2>Luciana Zabaleta</h2>
                    <h3>Developer</h3>
                </div>
                <div className="nav">
                    <ul>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#technologies">Technologies</a></li>
                        <li><a href="#about_me">About me</a></li>
                    </ul>
                </div>
                <div className="social_media">
                    <div className="github">
                        <img/>
                    </div>
                    <div className="instagram">
                        <img/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Nav