import React from 'react';
import './AllInfo.css'
import Card from '../Card/Card';
import web1 from '../../Images/web1.png';
const proyects = [ 
    {id:1,name:"Angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {id:2,name:"web2",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {id:3,name:"angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {id:4,name:"angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {id:5,name:"angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {id:6,name:"angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1},
    {id:7,name:"angular",description:"adfadsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsfsdafaaffasdsfsdafasdfsdfsdf",img:web1}

]
const AllInfo = () =>{
    const cards = proyects.map(proyect =>{
        return(<li>
            <Card id={proyect.id} name={proyect.name} description={proyect.description} img={proyect.img}/>
        </li>)
    })
    return(
        <>
            <div className='box_proyect' id='projects'>
                <div className='proyect'>
                    <ul>
                        {cards}
                    </ul>
                </div>
            </div>
            <div className='box_technologies' id='technologies'>
                <div className='technologies'>
                    
                </div>
            </div>
            <div className='box_about_me' id='about_me'>
                <div className='about_me'>

                </div>
            </div>
        </>)
}

export default AllInfo