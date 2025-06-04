'use server'; //to fix the bug of prisma client

// If you still want to call getProductsAPI inside a 'use server' file (which I don’t recommend for internal APIs), use an absolute URL or move it to a client side component

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';

import { prisma } from '@/lib/prisma';
import { Product } from '@prisma/client/edge';
import { redirect } from 'next/navigation';

export const getProducts = async () => {
	const result = await prisma.product.findMany({ include: { images: true } });
	return result;
};

export const getProductById = async (id: string) => {
	const result = await prisma.product.findFirst({
		where: { id },
		include: { images: true },
	});
	if (!result) return null;
	return result;
};

export const userProduct = async (product: Product) => {
	const { id } = product;
	let result;
	if (id) {
		result = await prisma.product.update({
			where: { id },
			data: product,
		});
	} else {
		await prisma.product.create({
			data: product,
		});
	}
	return result;
};

export const deleteProductById = async (id: string) => {
	await prisma.product.delete({ where: { id } });
	redirect('/dashboard/products'); // we add this for revalidate the page automatically
};

// this is for next internal api for the clint side data fetching
export const getProductsAPI = async () => {
	const result = await fetch(baseUrl + '/api/products', { method: 'GET' });
	const response = await result.json();
	console.log('🧪', response);
	return response;
};
