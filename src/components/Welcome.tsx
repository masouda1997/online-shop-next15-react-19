import React from 'react';
import { Button } from './ui';
import { MonitorSmartphone } from 'lucide-react';
import Link from 'next/link';

const Welcome = () => {
	return (
		<div className="flex flex-col justify-center items-center px-6 py-4">
			<span>welcome to </span>
			<div className="flex items-center justify-center gap-1">
				<MonitorSmartphone />
				<h1 className="text-2xl font-bold text-gray-800">Digital Shop</h1>
			</div>
			<Button asChild className="mt-6 ">
				<Link href={'/products'}>Go to Products</Link>
			</Button>
		</div>
	);
};

export default Welcome;
