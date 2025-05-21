'use client';

import { MousePointer2, ShoppingCart } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {
	Button,
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/components/ui';

const ProductDetail = (product: any) => {
	return (
		<div className="container mx-auto py-10">
			<Card className="max-w-3xl mx-auto ">
				<CardHeader>
					<CardTitle className="text-2xl font-bold">
						{product?.name}
					</CardTitle>
				</CardHeader>
				<CardContent>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="space-y-4 ">
							{product?.images.length > 0 ? (
								<Image
									alt={product?.name}
									// src={`${product?.images[0].image}`}
									src={'https://picsum.photos/500/500?random=2'}
									width={700}
									height={200}
									quality={50}
									property="1"
									className="rounded-lg "
								/>
							) : (
								<div className="w-full h-64 bg-gray-200 flex items-center justify-center rounded-lg">
									there is no Image available
								</div>
							)}
						</div>
						<div className="flex flex-col justify-between">
							<p className="text-xl font-semibold flex justify-start items-center ">
								${product?.price.toFixed(2)}
							</p>
							<p className="text-gray-700">
								Quantity: {product?.quantity}
							</p>
							<p className="mt-2 text-sm">
								Category: {product?.category}
							</p>
							<div className="flex justify-start items-start gap-2">
								<MousePointer2 size={40} />
								<p className=" text-gray-600 line-clamp-2 hover:line-clamp-none ">
									{product?.description ||
										'no description is available !'}
								</p>
							</div>
							<Button className="my-4">
								<ShoppingCart />
							</Button>
							<Button asChild variant={'secondary'}>
								<Link href={'/products'}>Back to Products</Link>
							</Button>
						</div>
					</div>
				</CardContent>
			</Card>
		</div>
	);
};

export default ProductDetail;
