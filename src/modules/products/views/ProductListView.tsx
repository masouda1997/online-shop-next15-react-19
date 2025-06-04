'use client';
import { useEffect, useState } from 'react';
import { getProductsAPI } from '../services';
import { ProductWithImages } from '@/types';
import ProductList from '../components/ProductList';

const ProductListView = () => {
	const [products, setProducts] = useState<ProductWithImages[]>([]);

	const getProductData = async () => {
		const result = await getProductsAPI();
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
