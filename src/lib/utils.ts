import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// automatically added by shadCn

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}
