import React from 'react'
import Link from 'next/link'

const Navbar = async () => {
  return (
    <nav className='h-fit text-lg fixed inset-x-0 top-0 bg-blue-200 z-[10] border-b py-2'>
        <div className='flex items-center h-full justify-center gap-2 px-8 mx-auto sm:justify-between max-x-8xl'>
        <Link href="/" className="items-center hidden gap-2 sm:flex">
          <p className="text-black dark:text-white rounded-3xl border-2 border-b-6 border-l-4 border-black px-2 py-1 text-2xl font-extrabold transition-all hover:-translate-y-[-2px] hover:-translate-x-[2px] md:block">
          <span className="text-black-500">FinEd</span>.io
          </p>
        </Link>
        <div className="flex items-center">
        <Link href="/sign-up" className="mr-8 mt-1 font-semibold text-base hover:-translate-y-[-2px] transition-all">
            Register
          </Link>
          <Link href="/about" className="mr-8 mt-1 font-semibold text-base hover:-translate-y-[-2px] transition-all">
            About Us
          </Link>
          
        </div>
        </div>
    </nav>
  )
}

export default Navbar