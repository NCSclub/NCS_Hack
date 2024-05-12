// Import the utility function cn from your utils/cn file
import { clsx } from "clsx"; // Correct import
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs)); // Change twMerge to clsx
}

