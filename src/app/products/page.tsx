import { prisma, prismaType } from '@/lib/prisma';
import ProductListView from '@/modules/products/views/ProductListView';
import React from 'react';

const Product = async () => {
	const data: prismaType.Product[] = await prisma.product.findMany();
	console.log('comes from prisma', data);

	return (
		<>
			<div>this is the product page self layer </div>
			<ProductListView />
		</>
	);
};

export default Product;
