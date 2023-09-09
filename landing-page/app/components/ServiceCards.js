import React from 'react'
import icon from '../assets/check-mark.png'

export default function ServiceCards({ heading, desc}) {
  return (
    <div className=''>
        <img src={icon} alt="" />
        <h3>Heading</h3>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, rem.</p>
    </div>
  )
}
