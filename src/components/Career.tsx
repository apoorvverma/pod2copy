import React from 'react'

import CareerCard from './CareerCard'
import designer from './icons/designer.svg'
import developer from './icons/developer.svg'
import recruiter from './icons/recruiter.svg'
import other from './icons/other.svg'

import './career.scss'

const CareerData = [
    {
      name: 'Designer',
      icon: designer
    },
    {
      name: 'Developer',
      icon: developer
    },
    {
      name: 'Recruiter',
      icon: recruiter
    },
    {
      name: 'Other',
      icon: other
    },
  ]

  const Career = () => {
    return (
      <div className="career" >
        <div>
          <p className="career--heading" >Are you a designer, developer or recruiter?</p>
        </div>
  
        <div className="career--cards " >
          {CareerData.map((card, index) => (
            <CareerCard key={index} {...card} />
          ))}
        </div>
      </div>
    )
  }
  
  export default Career