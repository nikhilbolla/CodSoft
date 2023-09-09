import React from 'react'
import ServiceCards from './ServiceCards'
import Button from '../components/Button'

export default function Services() {
  return (
    <div className='py-10 px-28 flex gap-10 items-center justify-between'>
        <div className="">
            <h2 className='text-2xl font-bold'>We Provide A Lot of Cool Services</h2>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolore totam necessitatibus in ratione nisi, odio molestias expedita accusantium aspernatur.</p>
            <div className="mt-5"><Button>Our Services</Button></div>
        </div>
        <div className='space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
            <ServiceCards />
        </div>
    </div>
  )
}
