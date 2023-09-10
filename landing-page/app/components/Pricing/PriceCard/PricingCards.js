import React from 'react'
import Button from '../../Buttons/Button'
import Features from './Features'


export default function PricingCards({heading, description, price, features}) {


  return (
    <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow">
              <h3 className="mb-4 text-2xl font-semibold">{heading}</h3>
              <p className="font-light text-gray-500 sm:text-lg ">{description}</p>
              <div className="flex justify-center items-baseline my-8">
                  <span className="mr-2 text-5xl font-extrabold">${price}</span>
                  <span className="text-gray-500 ">/month</span>
              </div>
              <ul role="list" className="mb-8 space-y-4 ">
                  {features.map( feature => (
                    <Features feature= {feature}/>
                  ))}
              </ul>
              <Button primary> Get Started </Button>
          </div>
  )
}
