import { Button, Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui';
import Image from 'next/image';
import React from 'react';

const Ads = () => {
	return (
		<Card className='flex flex-row justify-between p-1 m-0'>
			<div className='flex  flex-col justify-between m-0 p-1'>
				<CardHeader className='m-0 p-0'>
					<CardTitle> on Sale Products</CardTitle>
					<CardDescription> buy outdates product with 50% discount</CardDescription>
				</CardHeader>
				<CardFooter className='m-0 p-0'>
					<Button> Buy Now </Button>
				</CardFooter>
			</div>
			<Image src={"https://picsum.photos/300/200?random=2"} alt='ads' width={300} height={200} className='rounded-br-lg rounded-tr-lg'/>
		</Card>
	)
};

export default Ads;
