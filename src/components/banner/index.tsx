'use client';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
	Card,
	CardContent,
} from '@/components/ui';
import banner1 from './image/b1.jpg';
import banner2 from './image/b2.jpg';
import banner3 from './image/b3.jpg';
import banner4 from './image/b4.jpg';
import banner5 from './image/b5.jpg';
import banner6 from './image/b6.jpg';
import Image from 'next/image';

export function Banner() {
	const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

	return (
		<Carousel
			plugins={[plugin.current]}
			className="w-full"
			onMouseEnter={plugin.current.stop}
			onMouseLeave={plugin.current.reset}
		>
			<CarouselContent>
				{[banner1, banner2, banner3, banner4, banner5, banner6].map(
					(image, index) => (
						<CarouselItem key={index}>
							<div className="p-1">
								<Card>
									<CardContent className="relative aspect-square h-[560px] w-full flex items-center justify-center ">
										<Image
											src={image}
											alt="banner"
											className="object-cover w-full h-full"
										/>
									</CardContent>
								</Card>
							</div>
						</CarouselItem>
					),
				)}
			</CarouselContent>
			<CarouselPrevious />
			<CarouselNext />
		</Carousel>
	);
}
