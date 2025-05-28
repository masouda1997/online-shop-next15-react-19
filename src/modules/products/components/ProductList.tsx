import React from 'react';
import ProductItem from './ProductItem';
import { ProductWithImages } from '@/types';

const ProductList = (props: { products: ProductWithImages[] }) => {
	const { products } = props;
	return (
		<div className="flex justify-between items-center">
			{products && products.map((item) => (
				<ProductItem key={item.id} product={item} />
			))}
		</div>
	);
};

export default ProductList;
