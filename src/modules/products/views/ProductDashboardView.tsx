import React from 'react';
import ProductTable from '../components/ProductTable';
import { getProducts } from '../services';

// this view is a server component
const ProductDashboardView = async () => {
	const products = await getProducts();
	return (
		<div>
			<ProductTable products={products} />
		</div>
	);
};

export default ProductDashboardView;
