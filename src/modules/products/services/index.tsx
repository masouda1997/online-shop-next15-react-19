'use server'; //to fix the bug of prisma client

import { prisma } from '@/lib/prisma';
import { Product } from '@prisma/client';
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

export const upsertProduct = async (product: Product) => {
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
export const getProductAPI = async () => {
	const result = await fetch('/api/products', { method: 'GET' });
	const response = await result.json();
	return response;
};
