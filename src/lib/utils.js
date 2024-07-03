import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs))
}


export const currencyFormatter=(amount) =>{
  const formatter = Intl.NumberFormat("en-IN",{
    currency:"INR",
    style:"currency"
  })
  return formatter.format(amount);
}