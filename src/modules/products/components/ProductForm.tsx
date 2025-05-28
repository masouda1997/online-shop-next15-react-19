'use client';

import { Product, ProductCategory } from '@prisma/client';
import {
	Input,
	Button,
	Textarea,
	Label,
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from '@/components/ui';
import Link from 'next/link';

const ProductForm = (props: { product: Product | null }) => {
	const { product } = props;

	return (
		<Card className="w-[500px] mx-auto mt-10">
			<form className="max-w-lg">
				<CardHeader>
					<CardTitle> Product</CardTitle>

					<CardDescription>Create New Product</CardDescription>
				</CardHeader>
				<CardContent>
					<div className="my-2">
						<Label htmlFor="name">Product Name</Label>
						<Input
							id="name"
							required
							defaultValue={product?.name || ''}
						/>
					</div>
					<div className="my-2">
						<Label htmlFor="category">Category</Label>
						<Select
							required
							defaultValue={product?.category || ProductCategory.OTHERS}
						>
							<SelectTrigger>
								<SelectValue placeholder="Select a category" />
							</SelectTrigger>
							<SelectContent>
								{Object.values(ProductCategory).map((cat) => (
									<SelectItem key={cat} value={cat}>
										{cat}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
					</div>
					<div className="my-2">
						<Label htmlFor="description">Description</Label>
						<Textarea
							id="description"
							defaultValue={product?.description || ''}
						/>
					</div>
					<div className="my-2">
						<Label htmlFor="price">Price</Label>
						<Input
							type="number"
							id="price"
							step="0.01"
							defaultValue={product?.price || ''}
						/>
					</div>
					<div className="my-2">
						<Label htmlFor="quantity">Quantity</Label>
						<Input
							type="number"
							id="quantity"
							defaultValue={product?.quantity || ''}
						/>
					</div>
				</CardContent>
				<CardFooter className="flex justify-between">
					<Button variant="outline" asChild>
						<Link href="/dashboard/products">Back</Link>
					</Button>
					<Button type="submit">
						{product?.id ? 'Update Product' : 'Add Product'}
					</Button>
				</CardFooter>
			</form>
			{product?.id && <CardFooter>test</CardFooter>}
		</Card>
	);
};

export default ProductForm;
