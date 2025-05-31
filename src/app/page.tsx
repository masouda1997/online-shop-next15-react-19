import Welcome from '@/components/Welcome';
import { Banner } from '@/components/banner';
import { Button } from '@/components/ui';
import { LayoutDashboard } from 'lucide-react';
import Link from 'next/link';

import React from 'react';
export default function Home() {
	return (
		<div className="flex flex-col items-center">
			<Banner />
			<Welcome />
			<Button asChild>
				<Link
					href={'/dashboard/products'}
					className="flex justify-between items-center"
				>
					<LayoutDashboard />
					Dashboard
				</Link>
			</Button>
		</div>
	);
}
