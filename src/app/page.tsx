import { Banner } from '@/components/banner';
import Welcome from '@/components/Welcome';

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
