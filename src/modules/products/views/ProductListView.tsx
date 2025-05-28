'use client';
import { useEffect, useState } from 'react';
import { getProductAPI } from '../services';
import { ProductWithImages } from '@/types';
import ProductList from '../components/ProductList';

// this view is a client component 

const ProductListView = () => {
	const [products, setProducts] = useState<ProductWithImages[]>([]);

	const getProductData = async () => {
		const result = await getProductAPI();
		setProducts(result);
	};

	useEffect(() => {
		getProductData();
	}, []);

	// const products = await getProducts();
	// console.log(products);
	return (
		<>
			<ProductList products={products} />
		</>
	);
};

export default ProductListView;
