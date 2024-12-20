import React from "react";
import './Card.css';
const Card = (data) => {
    return(
        <>
        <a className="links" target="_blank" href={data.link}>
        <div className="card">
            <div className="content_image">
                <img src={data.img} className="image_proyect" alt={data.img}/>
            </div>
            <div className="content_info">
                <h2>{data.name}</h2>
                <p>{data.description}</p>
            </div>
         </div>
         </a>
        </>
    )
}

export default Card