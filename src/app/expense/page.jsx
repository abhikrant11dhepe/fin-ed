'use client';

import React, { useState,useEffect } from 'react';
import SideBar from '@/components/SideBar';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { currencyFormatter } from '@/lib/utils';
import ExpenseCard from '@/components/ExpenseCard';
import { Dialog, DialogTrigger, DialogContent, DialogTitle, DialogFooter } from '@/components/ui/dialog';
import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const Expense = () => {
  const [balance, setBalance] = useState(10000);
  const [expenses, setExpenses] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const formSchema = z.object({
    title: z.string().min(1, 'Title is required'),
    amount: z.number().min(0.01, 'Amount must be greater than 0'),
    category: z.string().min(1, 'Category is required'),
  });

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      amount: 0,
      category: '',
    },
  });

  const categoryColors = {
    food: 'yellow',
    travel: 'blue',
    entertainment: 'green',
    study: 'purple'
  };

  const handleAddExpense = (formData) => {
    const newExpense = {
      color: categoryColors[formData.category] || 'red',
      title: formData.title,
      amount: parseFloat(formData.amount),
      category: formData.category,
    };

    setExpenses([...expenses, newExpense]);
    setBalance(balance - parseFloat(formData.amount));
    setShowModal(false);
    form.reset(); // Reset the form after successful submission
  };

  const handleAddIncome = () => {
    const newIncomeAmount = parseFloat(prompt('Enter income amount:'));

    if (!isNaN(newIncomeAmount) && newIncomeAmount > 0) {
      setBalance(balance + newIncomeAmount);
    } else {
      alert('Please enter a valid amount.');
    }
  };

  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        label: 'Expenses by Category',
        data: [],
        backgroundColor: [],
        borderWidth: 1,
      },
    ],
  });

  useEffect(() => {
    // Update chart data whenever expenses change
    const updatedLabels = expenses.map(expense => expense.category);
    const updatedData = expenses.map(expense => expense.amount);
    const updatedBackgroundColors = expenses.map(expense => categoryColors[expense.category]);

    setChartData({
      labels: updatedLabels,
      datasets: [
        {
          ...chartData.datasets[0],
          data: updatedData,
          backgroundColor: updatedBackgroundColors,
        },
      ],
    });
  }, [expenses]);

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-sky-300 to-indigo-300 flex">
      <SideBar />

      <div className="flex-grow p-6 mt-8">
        <div className="bg-blue-200 border-2 h-[800px] w-[1300px] border-slate-400 rounded-3xl mt-10 ml-80">
          <div className='justify-start flex p-4 m-2 flex-col'>
            <h1 className='font-semibold text-3xl'>Hi, abhikrant_11</h1>
            <p className='text-xl font-medium mt-2'>Welcome to the Expense Tracker where you can manage your finances!</p>
          </div>
          <div className='justify-start ml-10 mt-1 flex-col'>
            <h1 className='text-lg text-secondary-foreground/80 font-semibold uppercase'>Balance</h1>
            <h2 className='font-bold text-3xl'>{currencyFormatter(balance)}</h2>
          </div>

          <div className='grid grid-cols-2 p-6'>
            <div className='rounded-xl'>
              <div className='p-2'>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button className='border-gray-700 border-2 rounded-xl bg-rose-400 font-medium text-lg mr-4 text-gray-800 hover:bg-rose-500'>
                      <Plus className='p-1' strokeWidth={2.5} />Add Expense
                    </Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogTitle>Add Expense</DialogTitle>
                    <Form {...form}>
                      <form onSubmit={form.handleSubmit(handleAddExpense)} className="space-y-4">
                        <FormField
                          control={form.control}
                          name="title"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Title</FormLabel>
                              <FormControl>
                                <Input placeholder="Title" {...field} />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="amount"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Amount</FormLabel>
                              <FormControl>
                                <Input
                                  type="number"
                                  placeholder="Amount"
                                  {...field}
                                  value={field.value} // Ensure value is set correctly for controlled component
                                  onChange={(e) => {
                                    const value = parseFloat(e.target.value);
                                    if (!isNaN(value)) {
                                      field.onChange(value); // Update field value with a number
                                    }
                                  }}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="category"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Category</FormLabel>
                              <FormControl>
                                <select {...field}>
                                  <option value="">Select Category</option>
                                  <option value="food">Food</option>
                                  <option value="travel">Travel</option>
                                  <option value="entertainment">Entertainment</option>
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <DialogFooter>
                          <Button type="submit">Add</Button>
                        </DialogFooter>
                      </form>
                    </Form>
                  </DialogContent>
                </Dialog>

                <Button className='border-gray-700 border-2 rounded-xl bg-green-400 font-medium text-lg ml-4 text-gray-800 hover:bg-green-500' onClick={handleAddIncome}>
                  <Plus className='p-1' strokeWidth={2.5} />Add Income
                </Button>
              </div>

              <div className='px-2 h-[500px] max-h-[500px] overflow-y-auto '>
                <h1 className='text-xl font-semibold px-2 py-2'>My Expenses</h1>
                {expenses.map((expense, index) => (
                  <ExpenseCard
                    key={index}
                    color={expense.color}
                    amount={expense.amount}
                    title={expense.title}
                    category={expense.category}
                  />
                ))}
              </div>



            </div>
            <div className=' rounded-xl flex justify-center items-center px-8 ml-20 mt-10 w-[500px] h-[500px]'>
              <Pie
    
                data={chartData}
                options={{
                  plugins: {
                    legend: {
                      position: 'bottom',
                      labels: {
                        color: 'black' 
                      }
                    },
                    title: {
                      display: true,
                      text: 'Expense Distribution',
                      color: 'white'
                    }
                  }
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expense;
