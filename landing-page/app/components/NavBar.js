import React from 'react'

export default function NavBar() {
  return (
    <>
        <div className='px-14 py-10 flex items-center justify-between'>
            <div>
                <h1 className='text-2xl font-bold '>Landing Page</h1>
            </div>
            <div>
                <ul className='flex gap-6 text-sm'>
                    <li>HOME</li>
                    <li>ABOUT US</li>
                    <li>SERVICES</li>
                    <li>PRICING</li>
                    <li>WORK</li>
                    <li>BLOG</li>
                    <li>CONTACT US</li>
                </ul>
            </div>
        </div>
    </>
  )
}
