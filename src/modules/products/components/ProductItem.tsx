import Link from 'next/link';
import Image from 'next/image';
import { GalleryThumbnails, Heart } from 'lucide-react';
import { Button, Card, CardContent, CardFooter, CardHeader } from '@/components/ui';

const ProductItem = async (props: { product: any }) => {
	const { product } = props;
	return (
        <Card className='w-[400px] transform transition-transform duration-300 hover:scale-105'>
            <CardHeader>
                <div>
                    <Image src={product?.image[0]?.image || '/assets/noImage.jpg'} alt={product?.name} fill className='rounded-t-lg object-cover'/>
                </div>
            </CardHeader>
            <CardContent>
                <h2 className='text-xl font-bold'>{product?.name}</h2>
                <p className='text-gray-500'>{product?.category}</p>
                <div className='flex justify-between items-center'>
                    <p className="mt-4 text-lg font-semibold">
                        ${product?.price?.toFixed(2)}
                    </p>
                    <div className="flex gap-2">
                        <Heart/>
                        <Link href={`/products/catalog?id=${product.id}`}>
                            <GalleryThumbnails/>
                        </Link>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button>
                    <Link href={`/products/${product.id}`}>More Details</Link>
                </Button>
            </CardFooter>
        </Card>
    )
};

export default ProductItem;
