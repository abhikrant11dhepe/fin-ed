import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import landing from '../../public/landing.png'
import SignIn from '@/components/SignIn'

export default function Home() {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-sky-300 to-indigo-300'>
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col mb-5 pb-20'>
        <h1 className='font-extrabold text-5xl text-center justify-center'>Unlock your Financial Potential with <span className='text-indigo-400 text-6xl' style={{ textShadow: '0 0 1px black' }}>FinEd.io</span></h1>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col md:flex-row sm:flex-row'>
        <div className='items-center justify-center -translate-x-1/4'>      
            <Image
              src={landing}
              width={500}
              height={500}
              alt="finance_image"
            />
        </div>
        <div className='items-center justify-center translate-x-1/4'>
          <SignIn/>
        </div>
      </div>
    </div>
  )
}
