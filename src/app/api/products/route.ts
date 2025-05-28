// handle rest api routes GET, POST , ...
import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
	// get action by prisma
	const data = await prisma.product.findMany({ include: { images: true } });
	return NextResponse.json(data);
}
