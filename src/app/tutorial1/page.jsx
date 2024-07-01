import React from 'react'
import SideBar from '@/components/SideBar'
import { Separator } from '@/components/ui/separator';
const Tutorial1 = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-sky-300 to-indigo-300 flex">
      {/* Sidebar (fixed width) */}
      <SideBar />


      <div className="flex-grow p-6 mt-8">
        <div className="bg-blue-200 border-2 h-[800px] w-[1300px] border-slate-400 rounded-3xl mt-10 ml-80">
          <div className='flex flex-col'>
            <h1 className='font-semibold text-4xl p-2 ml-6 mt-6'>Ready to Demystify the World of Finance?</h1>
            <h2 className='uppercase font-medium text-2xl ml-8 text-secondary-foreground/70'>Start with these enlightening videos</h2>
          </div>
          <div className='flex justify-center'>
            <h1 className='font-bold uppercase text-2xl p-2 ml-6 mt-6'>The 50-30-20 Rule<Separator className='w-[275px] bg-gray-400'/></h1>
          </div>
          <div className='flex justify-center mt-6 rounded-2xl overflow-hidden'>
          <iframe width="640" height="360" src="https://www.youtube.com/embed/OZQQMYfaBT4?si=Add5qXCDQqUlef7h" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tutorial1