import React from 'react';
import { DATA } from '../mock/products';
import ProductItem from './ProductItem';

const ProductList = () => {
	return (
		<div className="flex justify-between items-center">
			{DATA.map((item) => (
				<ProductItem key={item.id} product={item} />
			))}
		</div>
	);
};

export default ProductList;
