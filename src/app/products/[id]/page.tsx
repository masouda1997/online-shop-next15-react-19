import ProductDetail from '@/modules/products/components/ProductDetail';
import { DATA } from '@/modules/products/mock/products';
import React from 'react';

const page = async ({ params }: { params: Promise<{ id: number }> }) => {
	const data = await params;
	console.log(data);
	const prod = DATA[0];
	return <ProductDetail {...prod} />;
};

export default page;
