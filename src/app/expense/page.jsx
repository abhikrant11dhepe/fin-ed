import React from 'react'
import SideBar from '@/components/SideBar'
const Expense = () => {
    return (
        <div className="w-screen min-h-screen bg-gradient-to-r from-sky-300 to-indigo-300 flex">
          {/* Sidebar (fixed width) */}
          <SideBar /> 
    
          
          <div className="flex-grow p-6 mt-8">
            <div className="bg-blue-200 border-2 h-[800px] w-[1300px] border-slate-400 rounded-3xl mt-10 ml-80">
              
            </div>
          </div>
        </div>
      );
}

export default Expense