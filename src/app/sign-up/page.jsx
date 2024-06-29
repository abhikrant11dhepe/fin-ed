import React from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import landing from '../../../public/landing.png'

export default function Home() {
  return (
    <div className='w-screen min-h-screen bg-gradient-to-r from-teal-200 to-lime-200'>
      <div className='absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col'>
        <h1 className='font-extrabold text-5xl text-center justify-center'>Welcome to <span className='text-green-400' style={{ textShadow: '0 0 2px black' }}>FinEd.io</span></h1>
      </div>
      <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 flex flex-col md:flex-row sm:flex-row'>
        <div className=''>
          <div className="absolute">
            <Image
              src={landing}
              width={500}
              height={500}
              alt="finance_image"
            />
          </div>
        </div>
        <div>SignUp Page</div>
      </div>
    </div>
  )
}
