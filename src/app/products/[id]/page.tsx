import React from 'react';
import { ProductWithImages } from '@/types';
import { getProductById } from '@/modules/products/services';
import ProductDetail from '@/modules/products/components/ProductDetail';
// import { DATA } from '@/modules/products/mock/products';

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
	const data = await params;
	const {id} = data
	// const prod = DATA[0];
	const prod = await getProductById(id) as ProductWithImages
	return <ProductDetail {...prod} />;
};

export default page;
