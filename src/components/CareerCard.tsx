import React from 'react'

import './career.scss'

interface CardProps {
    name: string;
    icon: any;
  }

const CardCareer: React.FC<CardProps> = ({ name, icon }) => {
    return (
      <div className="career--card"  >
  
        <img src={icon} alt={name} />
        <p  className="career--card--name" >{name}</p>
  
      </div>
    )
  }
  
  export default CardCareer