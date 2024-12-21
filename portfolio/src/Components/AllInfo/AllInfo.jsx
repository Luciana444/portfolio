import React from 'react';
import './AllInfo.css'
import Card from '../Card/Card';
import web1 from '../../Images/web1.png';
const proyects = [ 
    {link:"https://github.com/Luciana444/TrabajoWeb1", id:1,name:"Angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {link:"https://github.com/Luciana444/TrabajoWeb1", id:2,name:"web2",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {link:"https://github.com/Luciana444/TrabajoWeb1", id:3,name:"angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {link:"https://github.com/Luciana444/TrabajoWeb1", id:4,name:"angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {link:"https://github.com/Luciana444/TrabajoWeb1", id:5,name:"angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1}
]

const technologies = [
    {id:1, name:"React", description:"trabaje con esta tecjndjkagjkljklasdgjklag", img:web1},
    {id:2, name:"Java", description:"trabaje con esta tecjndjkagjkljklasdgjklag", img:web1},
    {id:3, name:"React", description:"trabaje con esta tecjndjkagjkljklasdgjklag", img:web1},
    {id:4, name:"Java", description:"trabaje con esta tecjndjkagjkljklasdgjklag", img:web1}
]

const AllInfo = () =>{
    const cards = proyects.map(proyect =>{
        return(<li>
            <Card link={proyect.link} id={proyect.id} name={proyect.name} description={proyect.description} img={proyect.img}/>
        </li>)
    });
    const techs = technologies.map(technologie=>{
        return(<li>
                <Card id={technologie.id} name = {technologie.name} description={technologie.description} img={technologie.img}/>
            </li>)
    });
    return(
        <>
            <div className='all_info'>
                <div className='box_proyect' id='projects'>
                    <div className='proyect'>
                        <ul>
                            {cards}
                        </ul>
                    </div>
                </div>
                <div className='box_technologies' id='technologies'>
                    <div className='technologies'>
                        <ul>
                            {techs}
                        </ul>
                    </div>
                </div>
                <div className='box_about_me' id='about_me'>
                    <div className='about_me'>
                        <p>Hi, I’m Luciana Zabaleta, a 20-year-old passionate developer currently finishing my degree in TUDAI at the Universidad Nacional del Centro de Buenos Aires (UNICEN) in Tandil. Throughout my journey, I have worked on several projects that have strengthened my skills and allowed me to explore technologies like PHP, Java, JavaScript, HTML, CSS, React, and more. I thrive in teamwork environments, where I am known for being responsible, punctual, and committed to meeting deadlines. My dedication to delivering high-quality results drives me to continuously learn and improve, staying updated with the latest advancements in technology.</p>
                    </div>
                </div>
            </div>
        </>)
}

export default AllInfo