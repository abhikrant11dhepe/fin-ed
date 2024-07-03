import React from 'react'
import { currencyFormatter } from '@/lib/utils'

const ExpenseCard = ({color,title,amount}) => {
  return (
    <div className='flex items-center justify-between px-2 py-2 rounded-3xl bg-indigo-300 mb-4'>
        <div className='flex items-center gap-2'>
            <div className='w-[25px] h-[25px] rounded-full' style={{backgroundColor:color}}>
            <h4 className='capitalize ml-11 font-semibold text-lg'>{title}</h4>
            </div>
        </div>
        <p className='font-semibold text-lg mr-4'>{currencyFormatter(amount)}</p>
    </div>
  )
}

export default ExpenseCard