'use client';

import DashboardCard from '@/components/DashboardCard';
import ProfilePhoto from '@/components/ProfilePhoto';
import SideBar from '@/components/SideBar';
import { Separator } from '@/components/ui/separator';
import React from 'react';
import expense from '../../../public/expense.png'


const Dashboard = () => {
  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-sky-300 to-indigo-300 flex">
      {/* Sidebar */}
      <SideBar />

      <div className="flex-grow p-6 mt-8">
        <div className="bg-blue-200 border-2 h-[800px] w-[1300px] border-slate-400 rounded-3xl mt-10 ml-80">
          <div className='flex justify-between items-center ml-4 mt-2 py-4 px-4'>
            <div className='flex items-center'>
              <div className='relative items-center p-2 justify-center rounded-full bg-blue-200 mr-4 overflow-hidden'>
                <ProfilePhoto src="/avatar.jpg" alt="Profile Picture" size={100} />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Abhikrant Dhepe</h2>
                <div className='flex items-center'>
                  <h3 className='mt-1 text-xl font-semibold text-secondary-foreground/80'>abhikrant_11</h3>
                  <h4 className='text-lg font-semibold ml-2 mt-1'>/</h4>
                  <h4 className='ml-2 mt-1 text-xl font-semibold uppercase text-secondary-foreground/80'>FIN BUDDY</h4>
                </div>
              </div>
            </div>
            <div className='bg-gradient-to-r from-teal-200 to-lime-200 p-4 rounded-2xl mr-[100px] border-2 border-slate-400'>
              <h1 className='text-lg font-semibold'>FinCoins: 150</h1>
            </div>
          </div>
          <Separator className='mb-4 bg-gray-400 w-[100]' />
          <div className='flex flex-row gap-4 px-4'>
          <DashboardCard title='My Expenses' imageSrc={expense}>
            <h6 className='font-medium text-semibold'>Wow! you have a good control over your expenses!</h6>
            <h5 className='font-xl font-bold text-xl text-center mt-1 mb-2'>Recent Expenses</h5>
            <div className='items-center justify-center'>
              <h1 className='font-semibold text-xl text-center'>Burger - Rs.50</h1>
              <h1 className='font-semibold text-xl text-center'>Books - Rs.200</h1>
              <h1 className='font-semibold text-xl text-center'>School Bag - Rs.300</h1>
            </div>

          </DashboardCard>

          <DashboardCard title='My Tasks' imageSrc={expense}>
            <p>Wow, you have a good control over your expenses!</p>
          </DashboardCard>

          <DashboardCard title='Investment ' imageSrc={expense}>
            <p>Wow, you have a good control over your expenses!</p>
          </DashboardCard>
          
        </div>
        </div>
        
      </div>
    </div>
  );
};

export default Dashboard;
