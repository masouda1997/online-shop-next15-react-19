import { Banner } from '@/components/banner';
import Welcome from '@/components/Welcome';


import React from 'react';

export default function Home() {
	console.log('this it a log');
	return (
		<div className='flex flex-col items-center'>
			<Banner/>
			<Welcome/>
		</div>
	);
}
