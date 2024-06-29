"use client"

import React from 'react'
import { Separator } from './ui/separator'
import Link from 'next/link'

const SideBar = () => {
  return (
    <div className='w-[250px] h-[800px] absolute top-1/2 -translate-y-1/2 p-6 rounded-r-3xl bg-blue-200 border-2 border-slate-400 mt-8'>
        <div>
        <h2 className='text-sm font-semibold uppercase text-secondary-foreground/70'>Welcome</h2>
            <h2 className='text-xl font-semibold'>Abhikrant Dhepe</h2>
        </div>
        <Separator className='mt-2 text-gray-500 bg-gray-500 mb-8'/>

        <div className='text-secondary-foreground/90 font-semibold flex flex-col  mt-6 transition-all hover:-translate-y-[-2px]'>
            <Link href='/dashboard'>
                <h1 className='text-lg'>My Profile</h1>
            </Link>
        </div>

        <div className='text-secondary-foreground/90 font-semibold flex flex-col   mt-6 transition-all hover:-translate-y-[-2px]'>
            <Link href='/tutorial'>
                <h1 className='text-lg '>Watch n' Learn</h1>
            </Link>
        </div>

        <div className='text-secondary-foreground/90 font-semibold flex flex-col  mt-6 transition-all hover:-translate-y-[-2px]'>
            <Link href='/expense'>
                <h1 className='text-lg'>My Expenses</h1>
            </Link>
        </div>

        <div className='text-secondary-foreground/90 font-semibold flex flex-col  mt-6 transition-all hover:-translate-y-[-2px]'>
            <Link href='/chores'>
                <h1 className='text-lg'>My Chores</h1>
            </Link>
        </div>

        <div className='text-secondary-foreground/90 font-semibold flex flex-col  mt-6 transition-all hover:-translate-y-[-2px]'>
            <Link href='/reward'>
                <h1 className='text-lg'>Redeem Rewards</h1>
            </Link>
        </div>
    </div>
  )
}

export default SideBar
