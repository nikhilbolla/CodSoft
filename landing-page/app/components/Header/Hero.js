import Image from 'next/image'
import React from 'react'
import mypic from '../../assets/contribution.jpg'; // Adjust the path as needed
import Button from '../Buttons/Button';

export default function Hero() {
  return (
    <section className="p-10">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl ">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
            From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.
          </p>
         <div className="flex">
            <Button primary>Get Started</Button>
            <Button>Call to Us</Button>
         </div>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image 
            src={mypic}
            height={400}
            width={800}
          />
        </div>
      </div>
    </section>
  )
}
