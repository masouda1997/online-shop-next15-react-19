import { Prisma } from '@prisma/client';
// to get the types of images
export type ProductWithImages = Prisma.ProductGetPayload<{
	include: { images: true };
}>;
