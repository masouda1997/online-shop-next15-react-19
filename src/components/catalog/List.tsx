'use client';
import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '../ui';
import { DATA } from '@/modules/products/mock/products';

const CatalogList = () => {
	const images = DATA[0].images;
	return (
		<div className="flex flex-wrap justify-center mb-4">
			{images?.map((_image: any, index) => {
				return (
					<div key={index} className="p-1">
						<Card>
							<CardContent className="flex w-[400px] h-[400px] items-center justify-center p-6 ">
								<Image
									src={_image?.image}
									alt="gallery"
									width={400}
									height={400}
									className="hover:scale-105 transform transition-transform duration-300"
								/>
							</CardContent>
						</Card>
					</div>
				);
			})}
		</div>
	);
};

export default CatalogList;
