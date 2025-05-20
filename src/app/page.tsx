import Welcome from '@/components/Welcome';
import { Banner } from '@/components/banner';

import React from 'react';
console.log('object');
export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Banner />
			<Welcome />
		</div>
	);
}
