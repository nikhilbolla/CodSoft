import Image from 'next/image'
import React from 'react'
import mypic from '../assets/contribution.jpg'
import Button from './Button'

export default function Hero() {
  return (
    <div className='p-10'>
        <div className="flex gap-4 items-center justify-center">
            <div className=''>
                <h1 className='text-5xl text-bold'>Boost Personal <br/> Productivity</h1>
            
                    <p className='mt-4'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br/> Asperiores delectus, fugiat sit culpa voluptates aliquid?</p>
            
                <div className="mt-5 flex gap-3">
                    <Button primary>Start a Project</Button>
                    <Button >Contact</Button>
                </div>
            </div>
            <div>
                <div>
                    <Image
                        src={mypic}
                        alt="My Image Alt Text"
                        width={600} // Desired width in pixels
                        height={1100} // Desired height in pixels
                    />
                </div>
            </div>
        </div>
    </div>
  )
}
