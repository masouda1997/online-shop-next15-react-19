'use client';

import Image from 'next/image';
import { CircleX } from 'lucide-react';
import { prismaType } from '@/lib/prisma';
import Spinner from '@/components/Spinner';
import { redirect } from 'next/navigation';
import { Button, Input, Label } from '@/components/ui';
import React, { FC, useEffect, useState } from 'react';
import { deleteImage, getImages, uploadImage } from '../services/image';

const UploadImage: FC<{ productId: string }> = ({ productId }) => {
	const [file, setFile] = useState<File | null>(null);
	// const [images, setImages ] = useState<prismaType.Image[]|null>(null)
	const [images, setImages] = useState<prismaType.Image[]>([]);
	const [loading, setLoading] = useState(true);

	const updateImageId = (imageId: string) => {
		setImages((prev) => prev?.filter((img) => img.id !== imageId));
	};

	const handleDelete = async (imageId: string) => {
		setLoading(true);
		await deleteImage(imageId);
		updateImageId(imageId);
		setLoading(false);
	};

	const handleChangeFile = (e: React.ChangeEvent<HTMLInputElement>) => {
		const selectedFile = e.target.files?.[0];
		if (selectedFile) {
			setFile(selectedFile);
		} else {
			setFile(null);
		}
	};

	const fetchedImage = async () => {
		const data = await getImages(productId);
		// console.log(data.images);
		setImages(data.images);
		setLoading(false);
	};

	const handleUpload = async () => {
		if (!file || !productId) {
			alert('please select a valid file and product');
		} else {
			const formData = new FormData();
			formData.append('file', file);
			formData.append('productId', productId);
			const data = await uploadImage(formData);
			// const response = await uploadImage(formData);
			// console.log('upload response:', data);
			setImages(data.images);
			setFile(null);
			if (data) {
				redirect('/dashboard/products');
			}
		}
	};

	useEffect(() => {
		fetchedImage();
	}, [productId]);

	return (
		<div className="w-full">
			<Label htmlFor="picture">Product Image</Label>
			<div className="flex gap-2 w-full items-center justify-between">
				<Input
					id="picture"
					type="file"
					accept="image/*"
					onChange={handleChangeFile}
				/>
				<Button onClick={handleUpload}>Upload Image</Button>
			</div>
			{loading ? (
				<Spinner />
			) : (
				<div className="flex gap-2 mt-4 items-center justify-center">
					{images &&
						images?.map((item) => (
							<div key={item.id} className="relative group ">
								<CircleX
									onClick={() => handleDelete(item.id)}
									className="absolute top-1 -right-1.5 text-red-500 mx-2 my-1 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
								/>
								<Image
									width={100}
									height={100}
									alt="product image"
									src={`/${item.image}`}
									className="mt-4 - mx-auto rounded-md"
								/>
							</div>
						))}
				</div>
			)}
		</div>
	);
};

export default UploadImage;
